def test_health_check(client):
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"


def test_user_registration_and_login(client):
    # 1. Register new customer
    reg_payload = {
        "email": "customer@yahleeboutique.com",
        "password": "CustomerSecure123!",
        "full_name": "Maya Lin",
        "phone_number": "+1234567890",
        "address": "123 Fashion Ave, Suite 4B",
    }
    response = client.post("/api/v1/auth/register", json=reg_payload)
    assert response.status_code == 201
    data = response.json()
    assert data["email"] == "customer@yahleeboutique.com"
    assert data["full_name"] == "Maya Lin"
    assert "id" in data
    assert "hashed_password" not in data

    # 2. Duplicate registration should fail
    dup_res = client.post("/api/v1/auth/register", json=reg_payload)
    assert dup_res.status_code == 400

    # 3. Login with JSON
    login_res = client.post(
        "/api/v1/auth/login",
        json={"email": "customer@yahleeboutique.com", "password": "CustomerSecure123!"},
    )
    assert login_res.status_code == 200
    token_data = login_res.json()
    assert "access_token" in token_data
    assert token_data["token_type"] == "bearer"
    token = token_data["access_token"]

    # 4. Access protected profile /api/v1/users/me
    headers = {"Authorization": f"Bearer {token}"}
    profile_res = client.get("/api/v1/users/me", headers=headers)
    assert profile_res.status_code == 200
    profile = profile_res.json()
    assert profile["email"] == "customer@yahleeboutique.com"
    assert profile["full_name"] == "Maya Lin"

    # 5. Invalid password should fail
    bad_login = client.post(
        "/api/v1/auth/login",
        json={"email": "customer@yahleeboutique.com", "password": "WrongPassword!"},
    )
    assert bad_login.status_code == 400


def test_unauthorized_access(client):
    # Attempting to access protected endpoint without token
    res = client.get("/api/v1/users/me")
    assert res.status_code == 401
