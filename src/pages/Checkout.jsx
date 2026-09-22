import React, { useState } from 'react';

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Puducherry', 'Chandigarh', 'Jammu & Kashmir', 'Ladakh',
];

const Checkout = ({ cartItems = [] }) => {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', pincode: '', address: '', city: '', state: '', payment: 'upi' });
  const [step, setStep] = useState(1);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
  const total = subtotal >= 999 ? subtotal : subtotal + 99;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const fieldStyle = {
    width: '100%', padding: '12px 14px', border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)', fontSize: '0.9rem', outline: 'none',
    fontFamily: 'inherit', marginBottom: '14px',
  };

  const labelStyle = { fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' };

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">🔒 Secure Checkout</h1>
          <p className="page-hero-subtitle">India-wide delivery in 2–5 business days</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px', alignItems: 'start' }}>
          {/* Form */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '24px' }}>Delivery Address</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              <div><label style={labelStyle}>Full Name</label><input name="name" value={form.name} onChange={handleChange} style={fieldStyle} placeholder="Rahul Sharma" /></div>
              <div><label style={labelStyle}>Mobile Number</label><input name="mobile" value={form.mobile} onChange={handleChange} style={fieldStyle} placeholder="9876543210" /></div>
            </div>
            <label style={labelStyle}>Email Address</label>
            <input name="email" value={form.email} onChange={handleChange} style={fieldStyle} placeholder="rahul@example.com" type="email" />
            <label style={labelStyle}>Flat / House No., Street, Area</label>
            <textarea name="address" value={form.address} onChange={handleChange} style={{ ...fieldStyle, resize: 'vertical', minHeight: '80px' }} placeholder="123, MG Road, Koramangala..." />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0 16px' }}>
              <div><label style={labelStyle}>City</label><input name="city" value={form.city} onChange={handleChange} style={fieldStyle} placeholder="Bangalore" /></div>
              <div><label style={labelStyle}>State</label>
                <select name="state" value={form.state} onChange={handleChange} style={fieldStyle}>
                  <option value="">Select State</option>
                  {indianStates.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div><label style={labelStyle}>PIN Code</label><input name="pincode" value={form.pincode} onChange={handleChange} style={fieldStyle} placeholder="560001" maxLength={6} /></div>
            </div>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', margin: '24px 0 16px' }}>Payment Method</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'upi', label: '📱 UPI (GPay, PhonePe, Paytm)' },
                { id: 'card', label: '💳 Credit / Debit Card' },
                { id: 'netbanking', label: '🏦 Net Banking' },
                { id: 'cod', label: '💵 Cash on Delivery' },
              ].map((opt) => (
                <label key={opt.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px', border: `2px solid ${form.payment === opt.id ? 'var(--color-primary)' : 'var(--color-border)'}`, borderRadius: 'var(--radius-md)', cursor: 'pointer', background: form.payment === opt.id ? 'rgba(200,16,46,0.04)' : '#fff' }}>
                  <input type="radio" name="payment" value={opt.id} checked={form.payment === opt.id} onChange={handleChange} style={{ accentColor: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="cart-summary-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '16px' }}>Order Summary</h3>
            {cartItems.map((item) => (
              <div key={item.id} style={{ display: 'flex', gap: '10px', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '65px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', background: 'var(--color-bg-soft)' }} />
                <div style={{ flex: 1, fontSize: '0.82rem' }}>
                  <div style={{ fontWeight: 600, marginBottom: '2px' }}>{item.name}</div>
                  <div style={{ color: 'var(--color-text-muted)' }}>Qty: {item.qty || 1}</div>
                  <div style={{ fontWeight: 700 }}>₹{(item.price * (item.qty || 1)).toLocaleString('en-IN')}</div>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Shipping</span>
                <span style={{ color: subtotal >= 999 ? '#10b981' : 'inherit' }}>{subtotal >= 999 ? 'FREE' : '₹99'}</span>
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.1rem' }}>
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
            <button id="place-order-btn" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }}>
              Place Order →
            </button>
            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              🔒 100% Secure • Encrypted Payment
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
