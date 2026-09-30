from typing import Any, List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.api import deps
from app.crud import product as crud_product
from app.models.user import User
from app.schemas.product import (
    CategoryCreate,
    CategoryOut,
    ProductCreate,
    ProductOut,
    ProductUpdate,
)

router = APIRouter()


# Categories
@router.get("/categories", response_model=List[CategoryOut])
def read_categories(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
) -> Any:
    """Retrieve boutique categories."""
    return crud_product.get_categories(db, skip=skip, limit=limit)


@router.post("/categories", response_model=CategoryOut, status_code=status.HTTP_201_CREATED)
def create_category(
    *,
    db: Session = Depends(deps.get_db),
    category_in: CategoryCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """Create a new category (admin only)."""
    existing = crud_product.get_category_by_slug(db, slug=category_in.slug)
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Category with this slug already exists",
        )
    return crud_product.create_category(db, obj_in=category_in)


# Products
@router.get("/products", response_model=List[ProductOut])
def read_products(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    category_id: Optional[int] = Query(None, description="Filter by category ID"),
    featured: bool = Query(False, description="Filter featured products only"),
) -> Any:
    """Retrieve boutique products with optional category and featured filters."""
    return crud_product.get_products(
        db,
        skip=skip,
        limit=limit,
        category_id=category_id,
        featured_only=featured,
    )


@router.get("/products/{product_id}", response_model=ProductOut)
def read_product(
    product_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    """Get product details by ID."""
    product = crud_product.get_product(db, product_id=product_id)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found",
        )
    return product


@router.post("/products", response_model=ProductOut, status_code=status.HTTP_201_CREATED)
def create_product(
    *,
    db: Session = Depends(deps.get_db),
    product_in: ProductCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """Create a new boutique product (admin only)."""
    existing = crud_product.get_product_by_slug(db, slug=product_in.slug)
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Product with this slug already exists",
        )
    return crud_product.create_product(db, obj_in=product_in)


@router.put("/products/{product_id}", response_model=ProductOut)
def update_product(
    *,
    db: Session = Depends(deps.get_db),
    product_id: int,
    product_in: ProductUpdate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """Update a product (admin only)."""
    product = crud_product.get_product(db, product_id=product_id)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found",
        )
    return crud_product.update_product(db, db_obj=product, obj_in=product_in)


@router.delete("/products/{product_id}", response_model=ProductOut)
def delete_product(
    *,
    db: Session = Depends(deps.get_db),
    product_id: int,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """Delete a product (admin only)."""
    product = crud_product.delete_product(db, product_id=product_id)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found",
        )
    return product
