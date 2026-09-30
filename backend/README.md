# Yahlee Boutique - Backend API

A high-performance RESTful API built with **FastAPI**, **SQLAlchemy**, **SQLite**, and **JWT Authentication** for the Yahlee Boutique e-commerce platform.

---

## 🚀 Features

- **Authentication & Security**:
  - Secure bcrypt password hashing
  - JWT token generation and validation (PyJWT)
  - OAuth2 Password Bearer flow (compatible with Swagger UI authorize button)
  - Role-based authorization (customer vs. admin/superuser)
- **User Management**:
  - Customer registration (`/api/v1/auth/register`)
  - Customer & Admin login (`/api/v1/auth/login`)
  - Self-profile viewing and updates (`/api/v1/users/me`)
  - Admin user management (`/api/v1/users/`)
- **Product Catalog**:
  - Categories management (`/api/v1/catalog/categories`)
  - Products browsing with filtering by category and featured status (`/api/v1/catalog/products`)
  - Admin product management (create, update, delete)
- **Interactive Documentation**:
  - Swagger UI at `/docs`
  - ReDoc at `/redoc`
  - OpenAPI JSON at `/api/v1/openapi.json`
- **Testing**:
  - Pytest test suite with in-memory SQLite isolation

---

## 📁 Project Structure

```
backend/
├── app/
│   ├── api/
│   │   ├── deps.py               # Database & Auth dependencies
│   │   └── v1/
│   │       ├── api.py            # API router aggregator
│   │       └── endpoints/
│   │           ├── auth.py       # Register, login, test-token
│   │           ├── users.py      # User profile & administration
│   │           └── products.py   # Catalog & product endpoints
│   ├── core/
│   │   ├── config.py             # Pydantic settings & environment configuration
│   │   ├── database.py           # SQLAlchemy engine & session setup
│   │   └── security.py           # Password hashing & JWT logic
│   ├── crud/                     # Database access layer
│   │   ├── user.py
│   │   └── product.py
│   ├── models/                   # SQLAlchemy ORM models
│   │   ├── user.py
│   │   └── product.py
│   ├── schemas/                  # Pydantic validation & response schemas
│   │   ├── user.py
│   │   └── product.py
│   └── main.py                   # FastAPI application entrypoint & lifecycle
├── tests/                        # Automated Pytest test suite
│   ├── conftest.py
│   ├── test_auth.py
│   └── test_catalog.py
├── .env.example
├── .env
├── .gitignore
├── requirements.txt
└── README.md
```

---

## 🛠️ Setup & Running

### 1. Activate the Virtual Environment

**Windows PowerShell:**
```powershell
.\.venv\Scripts\Activate.ps1
```

**Linux / macOS:**
```bash
source .venv/bin/activate
```

### 2. Install Dependencies (Already installed in `.venv`)
```bash
pip install -r requirements.txt
```

### 3. Start Development Server
```bash
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```
Or directly run:
```bash
python -m app.main
```

The server will be available at:
- **API Root**: [http://127.0.0.1:8000](http://127.0.0.1:8000)
- **Interactive Swagger Docs**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- **ReDoc**: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

---

## 🔐 Default Admin Account

On first startup, the database auto-seeds a default admin account:
- **Email**: `admin@yahleeboutique.com`
- **Password**: `AdminPassword123!`

*(Make sure to change this in production via `.env` and database updates)*

---

## 🧪 Running Tests

To run the automated test suite:
```bash
pytest -v
```
