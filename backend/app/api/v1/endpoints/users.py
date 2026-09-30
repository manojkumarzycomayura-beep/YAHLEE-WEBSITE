from typing import Any, List
from fastapi import APIRouter, Body, Depends, HTTPException, status
from pydantic import EmailStr
from sqlalchemy.orm import Session

from app.api import deps
from app.crud import user as crud_user
from app.models.user import User
from app.schemas.user import UserCreate, UserOut, UserUpdate

router = APIRouter()


@router.get("/me", response_model=UserOut)
def read_user_me(
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Get current logged-in user."""
    return current_user


@router.put("/me", response_model=UserOut)
@router.patch("/me", response_model=UserOut)
def update_user_me(
    *,
    db: Session = Depends(deps.get_db),
    user_in: UserUpdate,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Update current logged-in user profile (PUT or PATCH)."""
    if user_in.email and user_in.email != current_user.email:
        existing_user = crud_user.get_by_email(db, email=user_in.email)
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered by another account.",
            )
    user = crud_user.update(db, db_obj=current_user, obj_in=user_in)
    return user


@router.get("/", response_model=List[UserOut])
def read_users(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """Retrieve users (admin only)."""
    users = crud_user.get_multi(db, skip=skip, limit=limit)
    return users


@router.get("/{user_id}", response_model=UserOut)
def read_user_by_id(
    user_id: int,
    current_user: User = Depends(deps.get_current_active_user),
    db: Session = Depends(deps.get_db),
) -> Any:
    """Get a specific user by id."""
    user = crud_user.get(db, user_id=user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="The user with this ID does not exist in the system",
        )
    if user.id != current_user.id and not crud_user.is_superuser(current_user):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="The user doesn't have enough privileges",
        )
    return user


@router.put("/{user_id}", response_model=UserOut)
def update_user(
    *,
    db: Session = Depends(deps.get_db),
    user_id: int,
    user_in: UserUpdate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """Update a user (admin only)."""
    user = crud_user.get(db, user_id=user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="The user with this ID does not exist in the system",
        )
    user = crud_user.update(db, db_obj=user, obj_in=user_in)
    return user
