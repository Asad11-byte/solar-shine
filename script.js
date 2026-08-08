/* =========================================================
   SOLAR SHINE — interactions
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- header on scroll ---------- */
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- mobile nav ---------- */
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const openNav = () => { mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const closeNav = () => { mobileNav.classList.remove('open'); document.body.style.overflow = ''; };
  hamburger && hamburger.addEventListener('click', openNav);
  mobileNavClose && mobileNavClose.addEventListener('click', closeNav);
  mobileNav && mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-scale');
  revealEls.forEach((el, i) => el.style.setProperty('--i', i % 8));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));

  /* ---------- animated counters ---------- */
  const counters = document.querySelectorAll('.counter');
  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + (suffix ? ' ' + suffix : '');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const counterIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animateCounter(entry.target); counterIo.unobserve(entry.target); }
    });
  }, { threshold: 0.6 });
  counters.forEach(c => counterIo.observe(c));

  /* ---------- product tabs ---------- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.getElementById('panel-' + btn.getAttribute('data-tab')).classList.add('active');
    });
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(open => {
        open.classList.remove('open');
        open.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------- calculator ---------- */
  const billSlider = document.getElementById('billSlider');
  const billOut = document.getElementById('billOut');
  const propButtons = document.querySelectorAll('#propType .chip');
  const battButtons = document.querySelectorAll('#battChoice .chip');
  const calcArc = document.getElementById('calcArc');
  const calcKw = document.getElementById('calcKw');
  const rSize = document.getElementById('rSize');
  const rPanels = document.getElementById('rPanels');
  const rCost = document.getElementById('rCost');
  const rPayback = document.getElementById('rPayback');

  let propMult = 1;
  let hasBattery = 1;

  function fmtPKR(n){
    n = Math.round(n / 1000) * 1000;
    return n.toLocaleString('en-US');
  }

  function updateCalculator(){
    const bill = parseInt(billSlider.value, 10);
    billOut.textContent = bill.toLocaleString('en-US');

    /* rough sizing: PKR ~4200/unit consumed at avg 60/unit tariff -> scale to kW.
       Approx: every PKR 45,000 of monthly bill ~ 5kW system (from PDF: 5kW system covers
       standard 5-Marla home load). Apply property multiplier. */
    let kw = (bill / 45000) * 5 * propMult;
    kw = Math.max(2.5, Math.min(kw, 32));
    const kwRounded = Math.round(kw * 2) / 2;

    const panelWattage = 585;
    const panelCount = Math.max(4, Math.round((kwRounded * 1000) / panelWattage));

    // cost per watt turnkey estimate: on-grid only cheaper, hybrid+battery pricier
    const perWattLow = hasBattery ? 95 : 68;
    const perWattHigh = hasBattery ? 125 : 85;
    const costLow = kwRounded * 1000 * perWattLow;
    const costHigh = kwRounded * 1000 * perWattHigh;

    const paybackYears = hasBattery ? (5.5 - Math.min(kwRounded / 20, 1.5)) : (3.8 - Math.min(kwRounded / 25, 1.2));

    calcKw.textContent = kwRounded.toFixed(1) + ' kW';
    rSize.textContent = kwRounded.toFixed(1) + ' kW';
    rPanels.textContent = panelCount + ' × ' + panelWattage + 'W';
    rCost.textContent = 'PKR ' + fmtPKR(costLow) + '–' + fmtPKR(costHigh);
    rPayback.textContent = '~' + paybackYears.toFixed(1) + (document.documentElement.lang === 'ur' ? ' سال' : ' yrs');

    // gauge: map kw 2.5-32 -> dash offset 270..0 (full arc = 270)
    const pct = Math.min((kwRounded - 2.5) / (32 - 2.5), 1);
    const dash = 270 - (pct * 270);
    calcArc.style.strokeDashoffset = dash;
  }

  billSlider && billSlider.addEventListener('input', updateCalculator);
  propButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      propButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      propMult = parseFloat(btn.getAttribute('data-mult'));
      updateCalculator();
    });
  });
  battButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      battButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      hasBattery = parseInt(btn.getAttribute('data-batt'), 10);
      updateCalculator();
    });
  });
  if (billSlider) updateCalculator();

  /* ---------- contact form -> WhatsApp ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cf-name').value.trim();
      const phone = document.getElementById('cf-phone').value.trim();
      const city = document.getElementById('cf-city').value.trim();
      const bill = document.getElementById('cf-bill').value.trim();
      const msg = document.getElementById('cf-msg').value.trim();

      const lines = [
        `Hi Solar Shine, I'd like a free quote.`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        city ? `City: ${city}` : null,
        bill ? `Avg. Monthly Bill: PKR ${bill}` : null,
        msg ? `Message: ${msg}` : null
      ].filter(Boolean).join('\n');

      const url = `https://wa.me/923001234567?text=${encodeURIComponent(lines)}`;
      window.open(url, '_blank', 'noopener');
    });
  }

});
