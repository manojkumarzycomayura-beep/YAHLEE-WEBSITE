from typing import List, Optional
from sqlalchemy.orm import Session

from app.models.product import Category, Product
from app.schemas.product import CategoryCreate, CategoryUpdate, ProductCreate, ProductUpdate


# Category CRUD
def get_category(db: Session, category_id: int) -> Optional[Category]:
    return db.query(Category).filter(Category.id == category_id).first()


def get_category_by_slug(db: Session, slug: str) -> Optional[Category]:
    return db.query(Category).filter(Category.slug == slug).first()


def get_categories(db: Session, skip: int = 0, limit: int = 100) -> List[Category]:
    return db.query(Category).offset(skip).limit(limit).all()


def create_category(db: Session, obj_in: CategoryCreate) -> Category:
    db_obj = Category(**obj_in.model_dump())
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj


# Product CRUD
def get_product(db: Session, product_id: int) -> Optional[Product]:
    return db.query(Product).filter(Product.id == product_id).first()


def get_product_by_slug(db: Session, slug: str) -> Optional[Product]:
    return db.query(Product).filter(Product.slug == slug).first()


def get_products(
    db: Session,
    skip: int = 0,
    limit: int = 100,
    category_id: Optional[int] = None,
    featured_only: bool = False,
) -> List[Product]:
    query = db.query(Product).filter(Product.is_active == True)
    if category_id is not None:
        query = query.filter(Product.category_id == category_id)
    if featured_only:
        query = query.filter(Product.is_featured == True)
    return query.offset(skip).limit(limit).all()


def create_product(db: Session, obj_in: ProductCreate) -> Product:
    db_obj = Product(**obj_in.model_dump())
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj


def update_product(db: Session, db_obj: Product, obj_in: ProductUpdate) -> Product:
    update_data = obj_in.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_obj, field, value)
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj


def delete_product(db: Session, product_id: int) -> Optional[Product]:
    db_obj = db.query(Product).filter(Product.id == product_id).first()
    if db_obj:
        db.delete(db_obj)
        db.commit()
    return db_obj
