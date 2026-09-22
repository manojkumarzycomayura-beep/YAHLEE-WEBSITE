import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Cart() {

  const cartItems = [
    {
      id: 1,
      name: "Traditional Silk Saree",
      size: "Free Size",
      price: 4999,
      quantity: 1,
      image: "/images/products/saree-1.jpg",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 5000 ? 0 : 100;

  const total = subtotal + shipping;

  return (
    <>
      <Header />

      <main className="cart-page">

        <div className="page-title">
          <span>YOUR SHOPPING BAG</span>
          <h1>Shopping Cart</h1>
        </div>

        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <h2>Your cart is empty</h2>

            <p>
              Discover beautiful ethnic fashion for every generation.
            </p>

            <Link to="/" className="btn-primary">
              Continue Shopping
            </Link>

          </div>

        ) : (

          <div className="cart-layout">

            <div className="cart-items">

              {cartItems.map((item) => (

                <div className="cart-item" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-info">

                    <h3>{item.name}</h3>

                    <p>
                      Size: {item.size}
                    </p>

                    <strong>
                      ₹{item.price.toLocaleString("en-IN")}
                    </strong>

                    <div className="cart-quantity">

                      <button>
                        <Minus size={15} />
                      </button>

                      <span>{item.quantity}</span>

                      <button>
                        <Plus size={15} />
                      </button>

                    </div>

                  </div>

                  <button className="remove-item">
                    <Trash2 size={19} />
                  </button>

                </div>

              ))}

            </div>

            <aside className="cart-summary">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>
                  {shipping === 0
                    ? "FREE"
                    : `₹${shipping}`}
                </span>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <strong>
                  ₹{total.toLocaleString("en-IN")}
                </strong>
              </div>

              <Link
                to="/checkout"
                className="checkout-btn"
              >
                Proceed to Checkout
              </Link>

            </aside>

          </div>

        )}

      </main>

      <Footer />
    </>
  );
}

export default Cart;
