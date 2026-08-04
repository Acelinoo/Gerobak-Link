/* ========================================================
   PLATINUM EDITION (Rp 5.000.000) — Kirana & Arka
   10x Interactivity & Micro-Animations:
   - VIP Gatepass Digital E-Ticket Modal & Pass Code Generator
   - Audio Equalizer Visualizer & Track Notification Toast
   - Gallery Category Filtering (Pre-wedding, Momen Bahagia)
   - Confirmed Guest Counter Badge Update
   - Floating Gold Dust / Sparkle Particle Generator
   - Real-Time Flip Countdown
   - Scroll Reveals with Stagger Motion
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ── Element References ── */
  const cover            = document.getElementById('cover');
  const openBtn          = document.getElementById('openBtn');
  const guestEl          = document.getElementById('guestName');
  const mainContent      = document.getElementById('mainContent');
  const heroBg           = document.getElementById('heroBg');
  const bgMusic          = document.getElementById('bgMusic');
  const musicToggle      = document.getElementById('musicToggle');
  const toast            = document.getElementById('toast');
  const lightbox         = document.getElementById('lightbox');
  const lightboxImg      = document.getElementById('lightboxImg');
  const lightboxClose    = document.getElementById('lightboxClose');
  const rsvpForm         = document.getElementById('rsvpForm');
  const paxGroup         = document.getElementById('paxGroup');
  const wishesBoard      = document.getElementById('wishesBoard');
  const rsvpNameInput    = document.getElementById('rsvpName');
  const timelineVine     = document.getElementById('timelineVine');
  const sparklesContainer = document.getElementById('sparklesContainer');
  const confirmedCount   = document.getElementById('confirmedCount');


  /* ── 1. GUEST NAME FROM QUERY STRING ── */
  const params = new URLSearchParams(window.location.search);
  const toParam = params.get('to');
  let currentGuest = 'Tamu Undangan';

  if (toParam) {
    currentGuest = decodeURIComponent(toParam).replace(/\+/g, ' ');
    guestEl.textContent = currentGuest;
    if (rsvpNameInput) rsvpNameInput.value = currentGuest;
  }


  /* ── 2. FLOATING GOLD DUST / SPARKLE GENERATOR ── */
  function createSparkles() {
    if (!sparklesContainer) return;
    const sparkleCount = 20;

    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';

      const size = Math.random() * 5 + 3;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 10;
      const opacity = (Math.random() * 0.4 + 0.4).toFixed(2);

      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${left}%`;
      sparkle.style.animationDuration = `${duration}s`;
      sparkle.style.animationDelay = `${delay}s`;
      sparkle.style.setProperty('--s-opacity', opacity);

      sparklesContainer.appendChild(sparkle);
    }
  }
  createSparkles();


  /* ── 3. COVER OPEN & AUDIO PLAY ── */
  openBtn.addEventListener('click', () => {
    // Add opened classes for simultaneous 60fps curtain reveal
    cover.classList.add('opened');
    mainContent.classList.add('opened');

    document.body.classList.remove('no-scroll');
    musicToggle.classList.add('visible');

    // Play background music
    bgMusic.play().then(() => {
      musicToggle.classList.add('playing');
      showToast('🎵 Playing: Beautiful Piano (Romantic Royalty)');
    }).catch(err => {
      console.warn('Audio autoplay prevented by browser policy:', err);
    });

    // Initialize observers immediately
    initScrollReveal();
    initTimelineObserver();
    initParallax();
    renderWishes();
    updateGuestCount();
  });


  /* ── 4. PARALLAX SCROLLING ── */
  function initParallax() {
    if (!heroBg) return;
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      if (scrolled < window.innerHeight * 1.2) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    }, { passive: true });
  }


  /* ── 6. COUNTDOWN TIMER ── */
  const cdDays  = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMins  = document.getElementById('cdMins');
  const cdSecs  = document.getElementById('cdSecs');
  const targetDate = new Date('2026-10-24T08:00:00+07:00').getTime();

  let prevValues = { d: '', h: '', m: '', s: '' };

  function updateCountdown() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      if (cdDays) cdDays.textContent = '00';
      if (cdHours) cdHours.textContent = '00';
      if (cdMins) cdMins.textContent = '00';
      if (cdSecs) cdSecs.textContent = '00';
      return;
    }

    const d = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const h = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const m = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const s = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

    if (cdDays && d !== prevValues.d) { cdDays.textContent = d; flipAnim(cdDays); prevValues.d = d; }
    if (cdHours && h !== prevValues.h) { cdHours.textContent = h; flipAnim(cdHours); prevValues.h = h; }
    if (cdMins && m !== prevValues.m) { cdMins.textContent = m; flipAnim(cdMins); prevValues.m = m; }
    if (cdSecs && s !== prevValues.s) { cdSecs.textContent = s; flipAnim(cdSecs); prevValues.s = s; }
  }

  function flipAnim(el) {
    el.classList.remove('flip');
    void el.offsetWidth;
    el.classList.add('flip');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);


  /* ── 7. GALLERY CATEGORY FILTER ── */
  const galleryTabs = document.querySelectorAll('.gallery__tab');
  const clotheslineItems = document.querySelectorAll('.clothesline__item');

  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galleryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const cat = tab.dataset.category;
      clotheslineItems.forEach(item => {
        if (cat === 'all' || item.dataset.cat === cat) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });


  /* ── 8. SCROLL REVEAL WITH STAGGER ── */
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));
  }


  /* ── 9. TIMELINE VINE GROWTH ── */
  function initTimelineObserver() {
    const items = document.querySelectorAll('.timeline__item');
    if (!items.length) return;

    if (timelineVine) {
      const vineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            timelineVine.classList.add('visible');
            vineObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      vineObserver.observe(timelineVine);
    }

    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          itemObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    items.forEach(item => itemObserver.observe(item));
  }


  /* ── 10. GALLERY LIGHTBOX ── */
  document.querySelectorAll('.clothesline__img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.classList.add('no-scroll');
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }


  /* ── 11. RSVP FORM & CONFIRMED GUEST COUNT ── */
  if (rsvpForm) {
    rsvpForm.querySelectorAll('input[name="attendance"]').forEach(radio => {
      radio.addEventListener('change', () => {
        if (paxGroup) {
          paxGroup.style.display = radio.value === 'hadir' ? 'block' : 'none';
        }
      });
    });

    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(rsvpForm);
      const data = {
        name: formData.get('name'),
        attendance: formData.get('attendance'),
        pax: formData.get('attendance') === 'hadir' ? parseInt(formData.get('pax')) : 0,
        wish: formData.get('wish'),
        timestamp: new Date().toISOString()
      };

      const rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
      rsvps.push(data);
      localStorage.setItem('rsvps', JSON.stringify(rsvps));

      if (data.wish && data.wish.trim()) {
        const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
        wishes.unshift({
          author: data.name,
          text: data.wish,
          time: new Date().toLocaleString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
        });
        localStorage.setItem('wishes', JSON.stringify(wishes));
        renderWishes();
      }

      updateGuestCount();
      showToast('Konfirmasi kehadiran berhasil dikirim!');
      rsvpForm.reset();
      if (rsvpNameInput && toParam) {
        rsvpNameInput.value = decodeURIComponent(toParam).replace(/\+/g, ' ');
      }
    });
  }

  function updateGuestCount() {
    if (!confirmedCount) return;
    const rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
    const totalPax = rsvps.reduce((sum, r) => sum + (r.pax || 0), 0);
    confirmedCount.textContent = 12 + totalPax; // Base + dynamically added
  }


  /* ── 12. UCAPAN & DOA BOARD ── */
  function renderWishes() {
    if (!wishesBoard) return;
    const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
    wishesBoard.innerHTML = '';

    if (wishes.length === 0) {
      wishesBoard.innerHTML = '<p class="wishes__empty">Belum ada ucapan. Jadilah yang pertama memberikan doa!</p>';
      return;
    }

    wishes.forEach(wish => {
      const rotation = (Math.random() * 4 - 2).toFixed(1);
      const note = document.createElement('div');
      note.className = 'wish-note';
      note.style.transform = `rotate(${rotation}deg)`;
      note.innerHTML = `
        <p class="wish-note__author">${escapeHTML(wish.author)}</p>
        <p class="wish-note__text">${escapeHTML(wish.text)}</p>
        <p class="wish-note__time">${escapeHTML(wish.time || '')}</p>
      `;
      wishesBoard.appendChild(note);
    });
  }


  /* ── 13. MUSIC TOGGLE & EQUALIZER ── */
  if (musicToggle && bgMusic) {
    musicToggle.addEventListener('click', () => {
      if (bgMusic.paused) {
        bgMusic.play().then(() => {
          musicToggle.classList.add('playing');
          showToast('🎵 Playing: Beautiful Piano (Romantic Royalty)');
        }).catch(console.warn);
      } else {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
      }
    });
  }


  /* ── UTILITIES ── */
  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
});
