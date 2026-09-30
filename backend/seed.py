# -*- coding: utf-8 -*-
"""
Seed script - populates Yahlee Boutique DB with categories and products
that mirror the static frontend data so the backend serves real content.

Run from the backend/ directory:
    .venv/Scripts/python.exe seed.py
"""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))

from app.core.database import Base, engine, SessionLocal
from app.models.user import User          # noqa: F401 — ensure table is registered
from app.models.product import Category, Product
from app.crud import user as crud_user
from app.schemas.user import UserCreate

# ── Create tables ────────────────────────────────────────────────────────────
Base.metadata.create_all(bind=engine)

db = SessionLocal()

# ── Categories ───────────────────────────────────────────────────────────────
CATEGORIES = [
    {"name": "Women",       "slug": "women",       "description": "Sarees, Kurtis, Lehengas & more",  "image_url": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80"},
    {"name": "Men",         "slug": "men",         "description": "Sherwanis, Kurtas, Nehru Jackets",  "image_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"},
    {"name": "Boys",        "slug": "boys",        "description": "Ethnic wear for little kings",       "image_url": "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80"},
    {"name": "Girls",       "slug": "girls",       "description": "Ethnic wear for little princesses",  "image_url": "https://images.unsplash.com/photo-1518831959646-742c3a14ebf6?w=600&q=80"},
    {"name": "Accessories", "slug": "accessories", "description": "Jewellery, Bags & Footwear",         "image_url": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80"},
    {"name": "Collections", "slug": "collections", "description": "Curated family and wedding looks",    "image_url": "https://images.unsplash.com/photo-1597983073493-88cd98bab6ac?w=600&q=80"},
]

cat_map: dict[str, int] = {}   # name → id
for c in CATEGORIES:
    existing = db.query(Category).filter(Category.slug == c["slug"]).first()
    if not existing:
        obj = Category(**c)
        db.add(obj)
        db.flush()
        cat_map[c["name"]] = obj.id
        print(f"  [+] Category: {c['name']}")
    else:
        cat_map[c["name"]] = existing.id
        print(f"  [-] Category already exists: {c['name']}")

# ── Products ─────────────────────────────────────────────────────────────────
PRODUCTS = [
    {
        "name": "Royal Embroidered Kurta Set",
        "slug": "royal-embroidered-kurta-set",
        "category_name": "Women",
        "price": 2499,
        "discount_price": None,
        "stock": 50,
        "size": "S, M, L, XL, XXL",
        "color": "Maroon, Cream",
        "image_url": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80",
        "is_featured": True,
        "description": "A beautifully embroidered ethnic kurta set designed for festive occasions and family celebrations.",
    },
    {
        "name": "Elegant Festive Anarkali",
        "slug": "elegant-festive-anarkali",
        "category_name": "Women",
        "price": 3299,
        "discount_price": 2999,
        "stock": 30,
        "size": "S, M, L, XL",
        "color": "Pink, Green",
        "image_url": "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&q=80",
        "is_featured": True,
        "description": "An elegant Anarkali featuring traditional detailing and a graceful silhouette.",
    },
    {
        "name": "Traditional Silk Saree",
        "slug": "traditional-silk-saree",
        "category_name": "Women",
        "price": 4499,
        "discount_price": 3999,
        "stock": 20,
        "size": "Free Size",
        "color": "Red, Gold",
        "image_url": "https://images.unsplash.com/photo-1617627143233-46f2b8f0e64e?w=500&q=80",
        "is_featured": True,
        "description": "A timeless silk saree crafted for weddings, festivals and special family occasions.",
    },
    {
        "name": "Classic Men's Kurta",
        "slug": "classic-mens-kurta",
        "category_name": "Men",
        "price": 1999,
        "discount_price": None,
        "stock": 60,
        "size": "S, M, L, XL, XXL",
        "color": "Cream, Beige",
        "image_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
        "is_featured": True,
        "description": "A classic ethnic kurta combining traditional style with comfortable everyday wear.",
    },
    {
        "name": "Festive Men's Kurta Set",
        "slug": "festive-mens-kurta-set",
        "category_name": "Men",
        "price": 2799,
        "discount_price": 2499,
        "stock": 40,
        "size": "M, L, XL, XXL",
        "color": "Navy, White",
        "image_url": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80",
        "is_featured": False,
        "description": "A refined kurta set perfect for weddings, festivals and traditional celebrations.",
    },
    {
        "name": "Royal Boys Kurta Set",
        "slug": "royal-boys-kurta-set",
        "category_name": "Boys",
        "price": 1499,
        "discount_price": None,
        "stock": 45,
        "size": "2-3Y, 4-5Y, 6-7Y, 8-9Y, 10-12Y",
        "color": "Cream, Maroon",
        "image_url": "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&q=80",
        "is_featured": True,
        "description": "A comfortable and stylish ethnic outfit designed especially for young boys.",
    },
    {
        "name": "Little Princess Lehenga",
        "slug": "little-princess-lehenga",
        "category_name": "Girls",
        "price": 1899,
        "discount_price": 1599,
        "stock": 35,
        "size": "2-3Y, 4-5Y, 6-7Y, 8-9Y, 10-12Y",
        "color": "Pink, Peach",
        "image_url": "https://images.unsplash.com/photo-1518831959646-742c3a14ebf6?w=500&q=80",
        "is_featured": True,
        "description": "A charming ethnic lehenga created for festive celebrations and special occasions.",
    },
    {
        "name": "Girls Festive Anarkali",
        "slug": "girls-festive-anarkali",
        "category_name": "Girls",
        "price": 1599,
        "discount_price": None,
        "stock": 28,
        "size": "2-3Y, 4-5Y, 6-7Y, 8-9Y, 10-12Y",
        "color": "Yellow, Pink",
        "image_url": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&q=80",
        "is_featured": False,
        "description": "A colourful festive Anarkali made for comfortable movement and joyful celebrations.",
    },
    {
        "name": "Traditional Jhumka Earrings",
        "slug": "traditional-jhumka-earrings",
        "category_name": "Accessories",
        "price": 799,
        "discount_price": None,
        "stock": 100,
        "size": "One Size",
        "color": "Gold",
        "image_url": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80",
        "is_featured": True,
        "description": "Classic traditional jhumkas that add an elegant finishing touch to ethnic outfits.",
    },
    {
        "name": "Embroidered Potli Bag",
        "slug": "embroidered-potli-bag",
        "category_name": "Accessories",
        "price": 899,
        "discount_price": 699,
        "stock": 60,
        "size": "One Size",
        "color": "Maroon, Gold",
        "image_url": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80",
        "is_featured": False,
        "description": "A beautifully embroidered potli bag designed to complement festive ethnic looks.",
    },
    {
        "name": "Festive Family Kurta Collection",
        "slug": "festive-family-kurta-collection",
        "category_name": "Collections",
        "price": 5999,
        "discount_price": 4999,
        "stock": 15,
        "size": "S, M, L, XL",
        "color": "Cream, Gold",
        "image_url": "https://images.unsplash.com/photo-1597983073493-88cd98bab6ac?w=500&q=80",
        "is_featured": True,
        "description": "Coordinate your family's festive wardrobe with timeless ethnic styles designed to look beautiful together.",
    },
    {
        "name": "Wedding Celebration Collection",
        "slug": "wedding-celebration-collection",
        "category_name": "Collections",
        "price": 4999,
        "discount_price": None,
        "stock": 10,
        "size": "S, M, L, XL, XXL",
        "color": "Red, Gold",
        "image_url": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&q=80",
        "is_featured": True,
        "description": "A curated collection of elegant ethnic styles for weddings and memorable celebrations.",
    },
]

for p in PRODUCTS:
    existing = db.query(Product).filter(Product.slug == p["slug"]).first()
    if not existing:
        cat_name = p.pop("category_name")
        obj = Product(
            **p,
            category_id=cat_map.get(cat_name),
            is_active=True,
        )
        db.add(obj)
        print(f"  [+] Product: {obj.name}")
    else:
        p.pop("category_name", None)
        print(f"  [-] Product already exists: {p['name']}")

# ── Admin user ───────────────────────────────────────────────────────────────
admin = crud_user.get_by_email(db, email="admin@yahleeboutique.com")
if not admin:
    crud_user.create(
        db,
        obj_in=UserCreate(
            email="admin@yahleeboutique.com",
            password="AdminPassword123!",
            full_name="Yahlee Admin",
        ),
        is_superuser=True,
    )
    print("  [+] Admin user created: admin@yahleeboutique.com")
else:
    print("  [-] Admin user already exists")

db.commit()
db.close()
print("\nSeed complete!")
