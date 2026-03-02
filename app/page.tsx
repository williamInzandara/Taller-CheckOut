export default function CheckoutPage() {
  return (
    <div className="checkout-wrapper">

      {/* ================= HEADER ================= */}
      <div className="checkout-header">

        <div className="header-top">
          <span className="back">← Go Back</span>
          <h1 className="logo">2019</h1>
          <div className="menu">
            <span></span>
            <span></span>
          </div>
        </div>

        {/* STEP BAR */}
        <div className="steps">

          <div className="step active">
            <span className="circle filled">✓</span>
            Personal details
          </div>

          <div className="step">
            <span className="circle">2</span>
            Order details
          </div>

          <div className="step">
            <span className="circle">3</span>
            Payment
          </div>

          <div className="step">
            <span className="circle">4</span>
            Confirmation
          </div>

          <span className="prev">← Previous step</span>

        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="checkout-content">

        {/* -------- ORDER CARD -------- */}
        <div className="order-card">

          <div className="order-header">
            <h2>Order items</h2>
            <span className="edit">✏ Edit shopping cart</span>
          </div>

          {/* ITEM 1 */}
          <div className="item">
            <div className="item-info">
              <img
                src="https://images.unsplash.com/photo-1585386959984-a41552262d8b"
                alt="Phone case"
              />
              <div>
                <h3>Silicone Case for iPhone 7</h3>
                <p>Product color: Midnight Blue</p>
                <p>Quantity: 2 items</p>
              </div>
            </div>
            <div className="price">
              <strong>€ 36.40</strong>
              <span>€ 18.20 per item</span>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="item">
            <div className="item-info">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                alt="Tempered glass"
              />
              <div>
                <h3>Tempered glass for iPhone</h3>
                <p>Size: iPhone 7, iPhone 8</p>
                <p>Quantity: 4 items</p>
              </div>
            </div>
            <div className="price">
              <strong>€ 20.00</strong>
              <span>€ 5.00 per item</span>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="item">
            <div className="item-info">
              <img
                src="https://images.unsplash.com/photo-1580910051074-3eb694886505"
                alt="Tempered glass"
              />
              <div>
                <h3>Tempered glass for iPhone</h3>
                <p>Size: iPhone 7, iPhone 8</p>
                <p>Quantity: 4 items</p>
              </div>
            </div>
            <div className="price">
              <strong>€ 20.00</strong>
              <span>€ 5.00 per item</span>
            </div>
          </div>

          {/* DISCOUNT BOX */}
          <div className="discount-box">
            Have discount code? Click to enter it.
          </div>

        </div>

        {/* -------- SUMMARY CARD -------- */}
        <div className="summary-card">

          <h2>Summary</h2>

          <p className="summary-text">
            The total cost consist of the tax, insurance and the delivery charge.
          </p>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>€ 56.40</strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <strong>FREE</strong>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <strong>€ 11.84</strong>
          </div>

          <div className="summary-row">
            <span>Insurance</span>
            <strong>€ 7.00</strong>
          </div>

          <hr />

          <div className="summary-total">
            <span>TOTAL:</span>
            <strong>€ 75.24</strong>
          </div>

          <button className="next-btn">Next step</button>

        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="divider"></div>

      {/* ================= FOOTER ICONS ================= */}
      <div className="checkout-footer">

        <div className="footer-item">
          <svg width="42" height="42" viewBox="0 0 24 24">
            <rect x="5" y="10" width="14" height="9" stroke="#f2a100" strokeWidth="2" fill="none"/>
            <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="#f2a100" strokeWidth="2" fill="none"/>
          </svg>
          <h4>Your information is Safe</h4>
          <p>The total cost consist of tax and insurance.</p>
        </div>

        <div className="footer-item">
          <svg width="42" height="42" viewBox="0 0 24 24">
            <path d="M12 3l8 4v5c0 5-3 8-8 9-5-1-8-4-8-9V7l8-4z"
              stroke="#f2a100"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <h4>Secure checkout</h4>
          <p>Safe and protected payment process.</p>
        </div>

        <div className="footer-item">
          <svg width="42" height="42" viewBox="0 0 24 24">
            <path d="M3 6h18v12H3z" stroke="#f2a100" strokeWidth="2" fill="none"/>
          </svg>
          <h4>24/7 Support</h4>
          <p>We are always here to help you.</p>
        </div>

      </div>

    </div>
  );
}