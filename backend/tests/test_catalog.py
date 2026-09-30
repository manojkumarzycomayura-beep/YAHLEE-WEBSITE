def test_catalog_flow(client):
    # 1. Login as admin seeded on startup
    login_res = client.post(
        "/api/v1/auth/login",
        json={"email": "admin@yahleeboutique.com", "password": "AdminPassword123!"},
    )
    assert login_res.status_code == 200
    admin_token = login_res.json()["access_token"]
    admin_headers = {"Authorization": f"Bearer {admin_token}"}

    # 2. Create category as admin
    cat_payload = {
        "name": "Summer Dresses",
        "slug": "summer-dresses",
        "description": "Light, breezy floral and linen dresses.",
    }
    cat_res = client.post(
        "/api/v1/catalog/categories", json=cat_payload, headers=admin_headers
    )
    assert cat_res.status_code == 201
    cat_id = cat_res.json()["id"]

    # 3. Create product in that category
    prod_payload = {
        "name": "Floral Silk Maxi Dress",
        "slug": "floral-silk-maxi-dress",
        "description": "Hand-stitched silk maxi dress in pastel rose.",
        "price": 149.99,
        "discount_price": 119.99,
        "stock": 25,
        "size": "S, M, L",
        "color": "Pastel Rose",
        "is_featured": True,
        "is_active": True,
        "category_id": cat_id,
    }
    prod_res = client.post(
        "/api/v1/catalog/products", json=prod_payload, headers=admin_headers
    )
    assert prod_res.status_code == 201
    prod_data = prod_res.json()
    assert prod_data["name"] == "Floral Silk Maxi Dress"
    assert prod_data["price"] == 149.99

    # 4. Public can read products
    list_res = client.get("/api/v1/catalog/products")
    assert list_res.status_code == 200
    items = list_res.json()
    assert len(items) >= 1
    assert any(p["slug"] == "floral-silk-maxi-dress" for p in items)
