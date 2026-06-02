'use strict';

// ════════════════════════════════════════════════════════════
//  MAIN.JS — Fábrica de Móveis Landing Page
// ════════════════════════════════════════════════════════════

let db = null;

// ─── Supabase init ────────────────────────────────────────
function initSupabase() {
  try {
    if (typeof supabase === 'undefined') return;
    const { url, anonKey } = SITE_CONFIG.supabase;
    if (url === 'SEU_SUPABASE_URL_AQUI') return;
    const { createClient } = supabase;
    db = createClient(url, anonKey);
  } catch (e) {
    console.warn('[Supabase] Não configurado:', e.message);
  }
}

// ─── Navbar scroll ────────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  const handler = () => {
    nav.classList.toggle('scrolled', window.scrollY > 70);
  };
  window.addEventListener('scroll', handler, { passive: true });
  handler();
}

// ─── Mobile menu ──────────────────────────────────────────
function initMobileMenu() {
  const btn   = document.getElementById('menu-toggle');
  const menu  = document.getElementById('mobile-menu');
  const icon  = document.getElementById('menu-icon');
  if (!btn || !menu) return;

  const close = () => {
    menu.classList.add('hidden');
    icon.className = 'fas fa-bars text-xl';
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    if (isOpen) { close(); return; }
    menu.classList.remove('hidden');
    icon.className = 'fas fa-times text-xl';
    btn.setAttribute('aria-expanded', 'true');
  });

  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

// ─── Smooth scroll ────────────────────────────────────────
function initSmoothScroll() {
  const navH = () => document.getElementById('navbar').offsetHeight;
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - navH() - 8, behavior: 'smooth' });
    });
  });
}

// ─── WhatsApp links ───────────────────────────────────────
function initWhatsApp() {
  const { number, defaultMessage } = SITE_CONFIG.whatsapp;
  const build = (msg) => `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

  // Float button
  const floatBtn = document.getElementById('wa-float');
  if (floatBtn) floatBtn.href = build(defaultMessage);

  // Any element with data-wa attribute
  document.querySelectorAll('[data-wa]').forEach(el => {
    const msg = el.dataset.waMsg || defaultMessage;
    el.href = build(msg);
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });
}

// ─── Product filter ───────────────────────────────────────
function initProductFilter() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-card');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const show = filter === 'todos' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

// ─── Swiper (testimonials) ────────────────────────────────
function initSwiper() {
  if (typeof Swiper === 'undefined') return;
  new Swiper('.swiper-testimonials', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: { delay: 5500, disableOnInteraction: true },
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: { 768: { slidesPerView: 2 } },
  });
}

// ─── FAQ accordion ────────────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const trigger  = item.querySelector('.faq-trigger');
    const content  = item.querySelector('.faq-content');
    const iconEl   = item.querySelector('.faq-icon');
    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => {
        i.querySelector('.faq-content').classList.add('hidden');
        i.querySelector('.faq-icon')?.classList.remove('rotate-180');
        i.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        content.classList.remove('hidden');
        iconEl?.classList.add('rotate-180');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ─── Gallery lightbox ─────────────────────────────────────
function initGallery() {
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lb-img');
  const lbCaption = document.getElementById('lb-caption');
  const lbClose   = document.getElementById('lb-close');
  const lbPrev    = document.getElementById('lb-prev');
  const lbNext    = document.getElementById('lb-next');
  if (!lightbox) return;

  const items = [...document.querySelectorAll('.gallery-item')];
  let current = 0;

  const open = (i) => {
    current = i;
    const img = items[i].querySelector('img');
    lbImg.src = img.dataset.full || img.src;
    lbImg.alt = img.alt;
    if (lbCaption) lbCaption.textContent = img.dataset.caption || img.alt;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  };

  const nav = (d) => open((current + d + items.length) % items.length);

  items.forEach((item, i) => item.addEventListener('click', () => open(i)));
  lbClose?.addEventListener('click', close);
  lbPrev?.addEventListener('click', () => nav(-1));
  lbNext?.addEventListener('click', () => nav(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   nav(-1);
    if (e.key === 'ArrowRight')  nav(1);
  });
}

// ─── CountUp animation ────────────────────────────────────
function initCountUp() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      obs.unobserve(entry.target);

      const end       = parseFloat(entry.target.dataset.count);
      const isDecimal = entry.target.dataset.decimal === 'true';
      const suffix    = entry.target.dataset.suffix || '';
      const dur       = 1800;
      const steps     = 60;
      let   cur       = 0;

      const tick = setInterval(() => {
        cur += end / steps;
        if (cur >= end) { cur = end; clearInterval(tick); }
        entry.target.textContent = (isDecimal ? cur.toFixed(1) : Math.floor(cur).toLocaleString('pt-BR')) + suffix;
      }, dur / steps);
    });
  }, { threshold: 0.5 });

  els.forEach(el => obs.observe(el));
}

// ─── Scroll reveal ────────────────────────────────────────
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('revealed');
      obs.unobserve(e.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ─── Lazy image load class ───────────────────────────────
function initLazyImages() {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });
}

// ─── Active nav link ──────────────────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');
  if (!links.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.remove('!text-yellow-400'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      active?.classList.add('!text-yellow-400');
    });
  }, { threshold: 0.35 });

  sections.forEach(s => obs.observe(s));
}

// ─── Phone mask ───────────────────────────────────────────
function applyPhoneMask(input) {
  input.addEventListener('input', e => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 11);
    if (v.length <= 2)       e.target.value = `(${v}`;
    else if (v.length <= 7)  e.target.value = `(${v.slice(0,2)}) ${v.slice(2)}`;
    else                     e.target.value = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
  });
}

// ─── Form validation ──────────────────────────────────────
function validateField(field) {
  const err = document.querySelector(`[data-error="${field.id}"]`);
  let ok = true;

  if (field.required && !field.value.trim()) ok = false;
  if (field.id === 'form-phone') {
    const digits = field.value.replace(/\D/g, '');
    if (digits.length < 10) ok = false;
  }

  field.classList.toggle('border-red-500', !ok);
  field.classList.toggle('border-green-500', ok && field.value.length > 0);
  if (err) err.classList.toggle('hidden', ok);
  return ok;
}

// ─── Form submission → Supabase ───────────────────────────
function initForm() {
  const form       = document.getElementById('lead-form');
  const successBox = document.getElementById('form-success');
  const errorBox   = document.getElementById('form-error');
  if (!form) return;

  const phoneInput = document.getElementById('form-phone');
  if (phoneInput) applyPhoneMask(phoneInput);

  // Inline validation on blur
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fields = [...form.querySelectorAll('input[required], select[required]')];
    const allOk  = fields.map(f => validateField(f)).every(Boolean);
    if (!allOk) return;

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i>Enviando…';
    errorBox?.classList.add('hidden');

    const payload = {
      nome:         document.getElementById('form-name').value.trim(),
      whatsapp:     document.getElementById('form-phone').value.replace(/\D/g, ''),
      tipo_movel:   document.getElementById('form-type').value,
      mensagem:     document.getElementById('form-message')?.value.trim() || null,
      origem:       'formulario',
      utm_source:   new URLSearchParams(location.search).get('utm_source'),
      utm_medium:   new URLSearchParams(location.search).get('utm_medium'),
      utm_campaign: new URLSearchParams(location.search).get('utm_campaign'),
      page_url:     location.href,
    };

    try {
      if (db) {
        const { error } = await db.from('leads').insert(payload);
        if (error) throw error;
      } else {
        await new Promise(r => setTimeout(r, 700)); // demo delay
      }
      form.classList.add('hidden');
      successBox?.classList.remove('hidden');
      // Build WA link for success button
      const { number } = SITE_CONFIG.whatsapp;
      const msg = `Olá! Me chamo ${payload.nome}. Acabei de solicitar um orçamento pelo site e gostaria de confirmar.`;
      const waSuccessBtn = document.getElementById('wa-success-btn');
      if (waSuccessBtn) waSuccessBtn.href = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
    } catch (err) {
      console.error(err);
      errorBox?.classList.remove('hidden');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '→ Quero meu orçamento agora';
    }
  });
}

// ─── Chatbot ──────────────────────────────────────────────
function initChatbot() {
  const widget = document.getElementById('chatbot');
  const body   = document.getElementById('chatbot-body');
  const closeBtn = document.getElementById('chatbot-close');
  if (!widget || !body) return;

  // Don't show again this session
  if (sessionStorage.getItem('chatbot_closed')) {
    widget.classList.add('hidden');
    return;
  }

  let triggered = false;
  const chatData = { tipo: '', nome: '' };

  const show = () => {
    if (triggered) return;
    triggered = true;
    widget.classList.remove('hidden');
    setTimeout(() => renderStep(0), 400);
  };

  setTimeout(show, 15000);
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    if (pct >= 50) show();
  }, { passive: true });

  closeBtn?.addEventListener('click', () => {
    widget.classList.add('hidden');
    sessionStorage.setItem('chatbot_closed', '1');
  });

  // ── Steps ──
  const steps = [
    {
      msg: 'Olá! 👋 Posso te ajudar a encontrar a peça ideal?',
      type: 'options',
      options: ['✅ Sim, quero ver!', '❌ Agora não'],
      handler: (v) => v.includes('Sim') ? renderStep(1) : endChat(),
    },
    {
      msg: 'Ótimo! O que você está procurando?',
      type: 'options',
      options: ['🍳 Acessórios', '🛏 Infantil', '💼 Bolsas', '🛋 Decoração'],
      handler: (v) => { chatData.tipo = v.replace(/^.\s/, ''); renderStep(2); },
    },
    {
      msg: 'Perfeito! Qual é o seu nome?',
      type: 'input',
      placeholder: 'Digite seu nome…',
      handler: (v) => { chatData.nome = v; renderStep(3); },
    },
    {
      msg: `Que ótimo, ${() => chatData.nome}! 🎉 Vou te conectar com nosso equipe  agora.`,
      type: 'cta',
    },
  ];

  function renderStep(i) {
    const step = steps[i];
    const msg  = typeof step.msg === 'function' ? step.msg() : step.msg
                  .replace('${() => chatData.nome}', chatData.nome);

    addBot(msg);

    setTimeout(() => {
      if (step.type === 'options') {
        const wrap = document.createElement('div');
        wrap.className = 'flex flex-wrap gap-2 mt-2 mb-3 pl-9';
        step.options.forEach(opt => {
          const btn = document.createElement('button');
          btn.textContent = opt;
          btn.className = 'chat-opt text-xs border border-gray-200 rounded-full px-3 py-1.5 hover:bg-primary hover:text-white hover:border-primary transition-colors';
          btn.addEventListener('click', () => {
            wrap.remove();
            addUser(opt);
            setTimeout(() => step.handler(opt), 400);
          });
          wrap.appendChild(btn);
        });
        body.appendChild(wrap);
        scrollDown();

      } else if (step.type === 'input') {
        const wrap = document.createElement('div');
        wrap.className = 'flex gap-2 mt-2 mb-3 pl-9';
        wrap.innerHTML = `
          <input type="text" class="chat-input flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="${step.placeholder}">
          <button class="chat-send bg-primary text-white rounded-lg px-3 py-2 text-sm hover:opacity-90 transition-opacity">
            <i class="fas fa-paper-plane"></i>
          </button>`;
        body.appendChild(wrap);
        scrollDown();

        const inp  = wrap.querySelector('.chat-input');
        const send = wrap.querySelector('.chat-send');
        const submit = () => {
          const val = inp.value.trim();
          if (!val) return;
          wrap.remove();
          addUser(val);
          setTimeout(() => step.handler(val), 400);
        };
        send.addEventListener('click', submit);
        inp.addEventListener('keypress', e => e.key === 'Enter' && submit());
        inp.focus();

      } else if (step.type === 'cta') {
        const finalMsg = `Olá! Me chamo ${chatData.nome} e tenho interesse em ${chatData.tipo}. Podem me ajudar?`;
        const url = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(finalMsg)}`;

        const div = document.createElement('div');
        div.className = 'pl-9 mb-3';
        div.innerHTML = `
          <a href="${url}" target="_blank" rel="noopener noreferrer"
             class="flex items-center justify-center gap-2 bg-wa text-white font-semibold text-sm py-2.5 px-4 rounded-xl hover:opacity-90 transition-opacity">
            <i class="fab fa-whatsapp text-base"></i> Falar no WhatsApp
          </a>`;
        body.appendChild(div);
        scrollDown();

        if (db) {
          const sid = Date.now().toString(36) + Math.random().toString(36).slice(2);
          db.from('chatbot_leads').insert({
            session_id: sid, nome: chatData.nome,
            tipo_movel: chatData.tipo, etapa_final: 'cta', converteu: false,
          });
          div.querySelector('a')?.addEventListener('click', () => {
            db.from('chatbot_leads').update({ converteu: true }).eq('session_id', sid);
          });
        }
      }
    }, 350);
  }

  function addBot(text) {
    const d = document.createElement('div');
    d.className = 'flex gap-2 mb-3';
    d.innerHTML = `
      <div class="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
        <i class="fas fa-couch text-white" style="font-size:10px"></i>
      </div>
      <div class="bg-gray-100 rounded-2xl rounded-tl-none px-3 py-2 text-sm text-gray-700 max-w-[85%]">${text}</div>`;
    body.appendChild(d);
    scrollDown();
  }

  function addUser(text) {
    const d = document.createElement('div');
    d.className = 'flex justify-end mb-3';
    d.innerHTML = `<div class="bg-primary text-white rounded-2xl rounded-tr-none px-3 py-2 text-sm max-w-[85%]">${text}</div>`;
    body.appendChild(d);
    scrollDown();
  }

  function endChat() {
    addBot('Sem problemas! Se precisar de algo, estamos aqui. 😊');
    setTimeout(() => {
      widget.classList.add('hidden');
      sessionStorage.setItem('chatbot_closed', '1');
    }, 2200);
  }

  function scrollDown() { body.scrollTop = body.scrollHeight; }
}

// ─── Typebot loader ───────────────────────────────────────
// Chamado pelo index.html quando provider = 'typebot' e o
// SDK já foi importado via <script type="module">.
function initTypebot() {
  const { typebotId } = SITE_CONFIG.chatbot;
  if (!typebotId || typebotId === 'SEU-TYPEBOT-ID') {
    console.warn('[Typebot] typebotId não configurado em config.js');
    return;
  }
  // Esconde o widget builtin (não será usado)
  const builtin = document.getElementById('chatbot');
  if (builtin) builtin.remove();

  window.Typebot?.initBubble({
    typebot: typebotId,
    previewMessage: {
      message: 'Olá! Posso te ajudar a escolher seu móvel? 🛋️',
      autoShowDelay: 8000,
    },
    theme: {
      button: { backgroundColor: '#1A2B4A', iconColor: '#FFFFFF' },
      previewMessage: {
        backgroundColor: '#ffffff',
        textColor: '#2C2C2C',
        closeButtonBackgroundColor: '#E8A020',
        closeButtonIconColor: '#ffffff',
      },
      chatWindow: { backgroundColor: '#F8F6F2' },
    },
  });
}

// ════════════════════════════════════════════════════════════
//  BOOT
// ════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initWhatsApp();
  initProductFilter();
  initSwiper();
  initFAQ();
  initGallery();
  initScrollReveal();
  initCountUp();
  initLazyImages();
  initActiveNav();
  initForm();

  // Chatbot: usa builtin ou Typebot conforme config.js
  if (SITE_CONFIG.chatbot?.provider === 'typebot') {
    // initTypebot() é chamado pelo módulo ES em index.html
    // após o SDK do Typebot ser carregado
  } else {
    initChatbot();
  }
});
