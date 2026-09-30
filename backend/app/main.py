from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.api import api_router
from app.core.config import settings
from app.core.database import Base, engine, SessionLocal
from app.crud import user as crud_user
from app.schemas.user import UserCreate


def init_db() -> None:
    """Create tables and initialize admin user if not present."""
    Base.metadata.create_all(bind=engine)

    # Optional auto-create an admin if none exists
    db = SessionLocal()
    try:
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
    finally:
        db.close()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Create tables and default seed data
    init_db()
    yield
    # Shutdown logic if any


app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="RESTful API for Yahlee Boutique with JWT authentication, customer management, and catalog endpoints.",
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
)

# CORS Middleware
origins = [str(origin) for origin in settings.BACKEND_CORS_ORIGINS]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API v1 Router
app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get("/", tags=["Health"])
def root():
    return {
        "message": "Welcome to Yahlee Boutique API",
        "docs": "/docs",
        "version": settings.VERSION,
        "api_v1": settings.API_V1_STR,
    }


@app.get("/health", tags=["Health"])
def health_check():
    return {"status": "healthy", "service": settings.PROJECT_NAME}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
