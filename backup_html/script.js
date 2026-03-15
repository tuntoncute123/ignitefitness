/* ===========================
   SCRIPT.JS - IGNITE FITNESS
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  // ======== HEADER SCROLL ========
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    // Back to top visibility
    const backToTop = document.getElementById('back-to-top');
    backToTop.classList.toggle('visible', window.scrollY > 400);
  });

  // ======== HERO SLIDER ========
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let autoSlideTimer;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function startAutoSlide() {
    autoSlideTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
  }

  document.getElementById('slider-prev').addEventListener('click', () => {
    goToSlide(currentSlide - 1);
    resetAutoSlide();
  });

  document.getElementById('slider-next').addEventListener('click', () => {
    goToSlide(currentSlide + 1);
    resetAutoSlide();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      resetAutoSlide();
    });
  });

  startAutoSlide();

  // ======== CITY / DISTRICT SELECT ========
  const cityDistricts = {
    hcm: ['Quận 1', 'Quận 3', 'Quận 5', 'Quận 7', 'Quận 10', 'Bình Thạnh', 'Tân Bình', 'Gò Vấp', 'Thủ Đức'],
    hn: ['Ba Đình', 'Đống Đa', 'Hoàn Kiếm', 'Cầu Giấy', 'Hoàng Mai', 'Hai Bà Trưng', 'Thanh Xuân'],
    dn: ['Hải Châu', 'Sơn Trà', 'Ngũ Hành Sơn', 'Cẩm Lệ'],
    ct: ['Ninh Kiều', 'Bình Thủy', 'Cái Răng'],
    bd: ['Thủ Dầu Một', 'Dĩ An', 'Thuận An'],
  };

  const citySelect = document.getElementById('city-select');
  const districtSelect = document.getElementById('district-select');

  citySelect.addEventListener('change', () => {
    const districts = cityDistricts[citySelect.value] || [];
    districtSelect.innerHTML = '<option value="">Chọn quận / huyện</option>';
    districts.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.toLowerCase().replace(/\s/g, '-');
      opt.textContent = d;
      districtSelect.appendChild(opt);
    });
  });

  document.getElementById('btn-find-branch').addEventListener('click', (e) => {
    e.preventDefault();
    const city = citySelect.options[citySelect.selectedIndex].text;
    const district = districtSelect.options[districtSelect.selectedIndex].text;
    if (citySelect.value) {
      alert(`Đang tìm phòng tập tại: ${city}${districtSelect.value ? ', ' + district : ''}`);
    } else {
      alert('Vui lòng chọn thành phố!');
    }
  });

  // Branch tags
  document.querySelectorAll('.branch-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      document.querySelectorAll('.branch-tag').forEach(t => t.classList.remove('active-tag'));
      tag.classList.add('active-tag');
    });
  });

  // ======== MOBILE MENU ========
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');

  mobileBtn.addEventListener('click', () => {
    mainNav.classList.toggle('nav--open');
    const isOpen = mainNav.classList.contains('nav--open');
    mobileBtn.setAttribute('aria-expanded', isOpen);
  });

  // ======== SMOOTH NAV ACTIVE ========
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const observerOptions = {
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));

  // ======== SCROLL ANIMATIONS ========
  const animateEls = document.querySelectorAll('.feature-card, .pricing-card, .knowledge-card, .cta-card');

  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-in');
          entry.target.style.opacity = '1';
        }, i * 100);
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animateEls.forEach(el => {
    el.style.opacity = '0';
    animObserver.observe(el);
  });

  // ======== BACK TO TOP ========
  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ======== MARQUEE DUPLICATE ========
  // Duplicate marquee text for seamless loop
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    const original = marqueeTrack.innerHTML;
    marqueeTrack.innerHTML = original + original;
  }

  // ======== CLOSE MOBILE NAV ON LINK CLICK ========
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('nav--open');
    });
  });

  // ======== LOGO REBUILD (inline) ========
  const logoLinks = document.querySelectorAll('.logo');
  logoLinks.forEach(logo => {
    logo.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="background:linear-gradient(135deg,#00AEEF 60%,#F26524 100%);border-radius:10px;padding:5px 8px;display:flex;flex-direction:column;align-items:flex-start;">
          <span style="font-size:0.45rem;font-weight:700;color:white;letter-spacing:0.12em;">THE</span>
          <span style="font-size:1.05rem;font-weight:900;color:white;letter-spacing:-0.02em;line-height:1;">IGNITE</span>
        </div>
        <div style="display:flex;flex-direction:column;">
          <span style="font-size:1.3rem;font-weight:900;color:#1a1a1a;letter-spacing:-0.03em;line-height:1;">gym</span>
          <span style="font-size:0.55rem;color:#888;letter-spacing:0.08em;">new way to fit</span>
        </div>
      </div>
    `;
  });

  // Add mobile nav styles dynamically
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .nav--open {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        background: white;
        padding: 16px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        gap: 4px;
        z-index: 999;
      }
      .nav--open .nav-link {
        padding: 12px 16px;
        font-size: 0.95rem;
      }
    }
  `;
  document.head.appendChild(style);

});
