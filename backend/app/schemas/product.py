from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, ConfigDict, Field


# Category schemas
class CategoryBase(BaseModel):
    name: str
    slug: str
    description: Optional[str] = None
    image_url: Optional[str] = None


class CategoryCreate(CategoryBase):
    pass


class CategoryUpdate(BaseModel):
    name: Optional[str] = None
    slug: Optional[str] = None
    description: Optional[str] = None
    image_url: Optional[str] = None


class CategoryOut(CategoryBase):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


# Product schemas
class ProductBase(BaseModel):
    name: str
    slug: str
    description: Optional[str] = None
    price: float = Field(..., gt=0)
    discount_price: Optional[float] = Field(None, gt=0)
    stock: int = Field(0, ge=0)
    size: Optional[str] = None
    color: Optional[str] = None
    image_url: Optional[str] = None
    is_featured: bool = False
    is_active: bool = True
    category_id: Optional[int] = None


class ProductCreate(ProductBase):
    pass


class ProductUpdate(BaseModel):
    name: Optional[str] = None
    slug: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = Field(None, gt=0)
    discount_price: Optional[float] = Field(None, gt=0)
    stock: Optional[int] = Field(None, ge=0)
    size: Optional[str] = None
    color: Optional[str] = None
    image_url: Optional[str] = None
    is_featured: Optional[bool] = None
    is_active: Optional[bool] = None
    category_id: Optional[int] = None


class ProductOut(ProductBase):
    id: int
    category: Optional[CategoryOut] = None
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
