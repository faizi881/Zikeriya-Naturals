// =============================================
// ZIKERIYA NATURALS - ORDER FORM
// Formspree ID: mpqbnlqa
// =============================================

(function () {

  // ── 1. CSS INJECT ──
  var style = document.createElement('style');
  style.textContent = `
    .form-section {
      background: linear-gradient(135deg, #f0f7e8, #f8f3e8);
      padding: 80px 20px;
    }
    .form-section .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 700;
      text-align: center;
      margin-bottom: 12px;
      color: #1a3a1a;
    }
    .form-section .divider {
      width: 60px;
      height: 3px;
      background: #5db843;
      border-radius: 2px;
      margin: 12px auto 16px;
    }
    .form-section .section-sub {
      text-align: center;
      color: #555;
      font-size: 1rem;
      max-width: 550px;
      margin: 0 auto 50px;
      line-height: 1.7;
    }
    .form-wrapper {
      max-width: 700px;
      margin: 0 auto;
      background: white;
      border-radius: 28px;
      padding: 48px 40px;
      box-shadow: 0 20px 60px rgba(26,58,26,.12);
      border: 1px solid rgba(93,184,67,.2);
    }
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 24px;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .form-group.full-width {
      grid-column: 1 / -1;
    }
    .form-group label {
      font-size: .88rem;
      font-weight: 700;
      color: #1a3a1a;
    }
    .form-group input,
    .form-group select,
    .form-group textarea {
      padding: 12px 16px;
      border: 2px solid #e8f5e0;
      border-radius: 12px;
      font-size: .92rem;
      font-family: 'Nunito', sans-serif;
      color: #333;
      outline: none;
      transition: border .2s, box-shadow .2s;
      background: #fafff7;
    }
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      border-color: #5db843;
      box-shadow: 0 0 0 4px rgba(93,184,67,.1);
    }
    .form-group textarea { resize: vertical; }
    .form-submit-btn {
      width: 100%;
      padding: 18px;
      background: #25D366;
      color: white;
      border: none;
      border-radius: 60px;
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 8px 30px rgba(37,211,102,.4);
      transition: transform .2s, box-shadow .2s;
      font-family: 'Nunito', sans-serif;
    }
    .form-submit-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 40px rgba(37,211,102,.5);
    }
    .form-submit-btn:disabled { opacity: .7; transform: none; }
    .form-success {
      text-align: center;
      padding: 40px 20px;
      display: none;
    }
    .success-icon { font-size: 4rem; margin-bottom: 16px; }
    .form-success h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      color: #1a3a1a;
      margin-bottom: 10px;
    }
    .form-success p { color: #555; font-size: 1rem; }
    @media (max-width: 768px) {
      .form-wrapper { padding: 28px 20px; }
      .form-grid { grid-template-columns: 1fr; }
      .form-group.full-width { grid-column: 1; }
    }
  `;
  document.head.appendChild(style);

  // ── 2. HTML INJECT ──
  var section = document.createElement('section');
  section.className = 'form-section';
  section.innerHTML = `
    <div class="section-title">Order Karein Abhi</div>
    <div class="divider"></div>
    <p class="section-sub">Form fill karein — hum jald aapse WhatsApp pe rabta karenge!</p>
    <div class="form-wrapper">

      <div class="form-success" id="formSuccess">
        <div class="success-icon">✅</div>
        <h3>Shukriya! Aapka Order Mil Gaya!</h3>
        <p>Hum jald aapse <strong>WhatsApp</strong> pe rabta karenge. 🌿</p>
      </div>

      <form id="orderForm" action="https://formspree.io/f/mpqbnlqa" method="POST">
        <div class="form-grid">

          <div class="form-group">
            <label>👤 Aapka Naam *</label>
            <input type="text" name="naam" placeholder="Apna naam likhen" required>
          </div>

          <div class="form-group">
            <label>📞 WhatsApp Number *</label>
            <input type="tel" name="whatsapp" placeholder="03XX XXXXXXX" required>
          </div>

          <div class="form-group">
            <label>📧 Email (Optional)</label>
            <input type="email" name="email" placeholder="aapki@email.com">
          </div>

          <div class="form-group">
            <label>📦 Kitni Bottles Chahiye? *</label>
            <select name="quantity" required>
              <option value="">Select karein</option>
              <option value="1 Bottle - Rs.1499">1 Bottle — Rs. 1,499</option>
              <option value="2 Bottles - Rs.2799">2 Bottles — Rs. 2,799</option>
              <option value="3 Bottles - Rs.3999">3 Bottles — Rs. 3,999</option>
            </select>
          </div>

          <div class="form-group full-width">
            <label>🏠 Delivery Address *</label>
            <textarea name="address" placeholder="Ghar ka pura address likhen — City, Area, Gali number..." required rows="3"></textarea>
          </div>

          <div class="form-group full-width">
            <label>💬 Koi Sawal? (Optional)</label>
            <textarea name="message" placeholder="Koi bhi sawal poochh sakte hain..." rows="2"></textarea>
          </div>

        </div>

        <input type="hidden" name="product" value="RootRevive Hair Growth Organic Oil">
        <input type="hidden" name="_subject" value="🌿 Naya Order Aaya - RootRevive Hair Oil!">

        <button type="submit" class="form-submit-btn" id="submitBtn">
          🛒 Order Place Karein
        </button>
      </form>

    </div>
  `;

  // ── 3. INSERT before footer ──
section.id = 'orderForm';
var footer = document.querySelector('footer');
if (footer) {
  footer.parentNode.insertBefore(section, footer);
} else {
  document.body.appendChild(section);
}
  // ── 4. FORM SUBMIT LOGIC ──
  var form = document.getElementById('orderForm');
  var btn = document.getElementById('submitBtn');
  var success = document.getElementById('formSuccess');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = '⏳ Bheja ja raha hai...';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(function (res) {
      if (res.ok) {
        form.style.display = 'none';
        success.style.display = 'block';
      } else {
        btn.textContent = '❌ Error! Dobara try karein';
        btn.disabled = false;
      }
    })
    .catch(function () {
      btn.textContent = '❌ Error! Dobara try karein';
      btn.disabled = false;
    });
  });

})();