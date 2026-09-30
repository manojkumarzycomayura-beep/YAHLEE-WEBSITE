/**
 * Yahlee Boutique - useProducts hook
 * Fetches products and categories from the FastAPI backend.
 * Falls back to static data if the backend is unavailable.
 */

import { useState, useEffect, useCallback } from 'react';
import * as api from '../services/api';
import { products as staticProducts } from '../data/products';
import { categories as staticCategories } from '../data/categories';

// ─── Map backend product → frontend product shape ─────────────────────────────
function normalizeProduct(p) {
  // Backend returns category as a nested object { id, name, slug, ... }
  const categoryName =
    (p.category && typeof p.category === 'object' ? p.category.name : null) ||
    p.category_name ||
    (typeof p.category === 'string' ? p.category : '') ||
    '';

  // Backend stores sizes/colors as comma-separated strings; frontend expects arrays
  const sizes = Array.isArray(p.sizes)
    ? p.sizes
    : p.size
    ? p.size.split(',').map((s) => s.trim()).filter(Boolean)
    : [];

  const colors = Array.isArray(p.colors)
    ? p.colors
    : p.color
    ? p.color.split(',').map((c) => c.trim()).filter(Boolean)
    : [];

  return {
    id: p.id,
    name: p.name,
    category: categoryName,
    subcategory: p.subcategory || '',
    price: p.price,
    oldPrice: p.discount_price || p.compare_at_price || p.old_price || null,
    rating: p.rating ?? 4.7,
    reviews: p.review_count ?? 0,
    badge: p.badge || (p.is_featured ? 'Featured' : null),
    image: p.image_url || p.image || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80',
    sizes,
    colors,
    description: p.description || '',
    slug: p.slug || '',
    stock: p.stock ?? null,
    is_featured: p.is_featured ?? false,
    category_id: p.category_id || (p.category && p.category.id) || null,
  };
}


// ─── Map backend category → frontend shape ────────────────────────────────────
function normalizeCategory(c) {
  return {
    id: c.id,
    name: c.name,
    slug: c.slug,
    description: c.description || '',
    productCount: c.product_count ?? 0,
    image: c.image_url || c.image || '',
  };
}

// ─── Hook: useProducts ────────────────────────────────────────────────────────
/**
 * Fetch products from the backend with optional filters.
 * @param {{ categoryId?: number, featured?: boolean, enabled?: boolean }} options
 */
export function useProducts({ categoryId, featured, enabled = true } = {}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fromBackend, setFromBackend] = useState(false);

  const fetchProducts = useCallback(async () => {
    if (!enabled) return;
    setLoading(true);
    setError(null);

    try {
      const params = {};
      if (categoryId != null) params.category_id = categoryId;
      if (featured != null) params.featured = featured;
      params.limit = 100;

      const raw = await api.getProducts(params);
      setProducts(raw.map(normalizeProduct));
      setFromBackend(true);
    } catch (err) {
      console.warn('[useProducts] Backend unavailable, using static data:', err.message);
      // Graceful fallback to static data
      let filtered = staticProducts;
      if (categoryId != null) {
        // static data doesn't use numeric category IDs — skip filter
      }
      setProducts(filtered);
      setFromBackend(false);
      setError(null); // Not a hard error — we have fallback data
    } finally {
      setLoading(false);
    }
  }, [categoryId, featured, enabled]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, fromBackend, refetch: fetchProducts };
}

// ─── Hook: useProduct (single) ────────────────────────────────────────────────
/**
 * Fetch a single product by ID from the backend.
 * Falls back to static data if backend is unavailable.
 * @param {number|string} id
 */
export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);

    api
      .getProduct(id)
      .then((raw) => setProduct(normalizeProduct(raw)))
      .catch((err) => {
        console.warn('[useProduct] Backend unavailable, using static data:', err.message);
        // Fallback to static data
        const found = staticProducts.find((p) => p.id === Number(id));
        if (found) {
          setProduct(found);
        } else {
          setError('Product not found');
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading, error };
}

// ─── Hook: useCategories ──────────────────────────────────────────────────────
/**
 * Fetch categories from the backend, falling back to static data.
 */
export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .getCategories()
      .then((raw) => setCategories(raw.map(normalizeCategory)))
      .catch((err) => {
        console.warn('[useCategories] Backend unavailable, using static data:', err.message);
        setCategories(staticCategories);
      })
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading, error };
}
