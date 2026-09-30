/**
 * Yahlee Boutique - API Service
 * Central client for all backend API calls (FastAPI at /api/v1)
 */

/**
 * In development: Vite proxies /api → http://127.0.0.1:8000 (see vite.config.js)
 * In production (Vercel): set VITE_API_BASE_URL=https://your-render-app.onrender.com
 *   so API calls go directly to the Render backend.
 */
const BASE_URL = import.meta.env.VITE_API_BASE_URL
  ? `${import.meta.env.VITE_API_BASE_URL}/api/v1`
  : '/api/v1';

// ─── Helpers ────────────────────────────────────────────────────────────────

function getToken() {
  return localStorage.getItem('yahlee_token');
}

async function request(path, options = {}) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorDetail = `HTTP ${response.status}`;
    try {
      const err = await response.json();
      errorDetail = err.detail || JSON.stringify(err);
    } catch {
      // ignore json parse errors
    }
    throw new Error(errorDetail);
  }

  // 204 No Content
  if (response.status === 204) return null;

  return response.json();
}

// ─── Auth ────────────────────────────────────────────────────────────────────

/**
 * Register a new customer account.
 * @param {{ email: string, password: string, full_name: string }} data
 */
export async function register(data) {
  return request('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Login with email + password — returns { access_token, token_type }
 * @param {{ email: string, password: string }} data
 */
export async function login(data) {
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Validate the stored token and get the current user profile.
 */
export async function getMe() {
  return request('/users/me');
}

/**
 * Update the current user's profile.
 * @param {{ full_name?: string, phone?: string }} data
 */
export async function updateMe(data) {
  return request('/users/me', {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

// ─── Catalog ─────────────────────────────────────────────────────────────────

/**
 * Fetch all categories.
 */
export async function getCategories() {
  return request('/catalog/categories');
}

/**
 * Fetch products with optional filters.
 * @param {{ category_id?: number, featured?: boolean, skip?: number, limit?: number }} params
 */
export async function getProducts(params = {}) {
  const query = new URLSearchParams();
  if (params.category_id != null) query.set('category_id', params.category_id);
  if (params.featured != null) query.set('featured', params.featured);
  if (params.skip != null) query.set('skip', params.skip);
  if (params.limit != null) query.set('limit', params.limit);
  const qs = query.toString();
  return request(`/catalog/products${qs ? `?${qs}` : ''}`);
}

/**
 * Fetch a single product by ID.
 * @param {number|string} id
 */
export async function getProduct(id) {
  return request(`/catalog/products/${id}`);
}

// ─── Token Storage ────────────────────────────────────────────────────────────

export function saveToken(token) {
  localStorage.setItem('yahlee_token', token);
}

export function removeToken() {
  localStorage.removeItem('yahlee_token');
}

export function hasToken() {
  return Boolean(getToken());
}
