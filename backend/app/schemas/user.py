from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict, EmailStr, Field


# Shared properties
class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None
    phone_number: Optional[str] = None
    address: Optional[str] = None
    is_active: Optional[bool] = True


# Properties to receive via API on creation
class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=6, description="Password with min 6 characters")
    full_name: Optional[str] = None
    phone_number: Optional[str] = None
    address: Optional[str] = None


# Properties to receive via API on update
class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    password: Optional[str] = Field(None, min_length=6)
    full_name: Optional[str] = None
    phone_number: Optional[str] = None
    address: Optional[str] = None
    is_active: Optional[bool] = None


# Properties to return via API
class UserOut(UserBase):
    id: int
    is_superuser: bool
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


# Properties stored in DB
class UserInDB(UserOut):
    hashed_password: str


# Authentication schemas
class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class TokenPayload(BaseModel):
    sub: Optional[str] = None
    exp: Optional[int] = None


class LoginRequest(BaseModel):
    email: EmailStr
    password: str
