/* Shivneri Enterprises — motion layer (GSAP + ScrollTrigger + Lenis) */
(async () => {
  /* Inline the logo SVGs so their paths can be animated and recoloured */
  await Promise.all(['full', 'mark'].map(async (k) => {
    const slots = document.querySelectorAll(`[data-svg="${k}"]`);
    try {
      const res = await fetch(`/assets/brand/logo-${k}.svg`);
      const svg = await res.text();
      slots.forEach((s) => (s.outerHTML = svg));
    } catch (e) { /* logo stays empty; page still works */ }
  }));

  const root = document.documentElement;
  const body = document.body;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  $$('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));

  /* If the animation libraries fail to load, show the static page. */
  if (!window.gsap || !window.ScrollTrigger) {
    root.classList.remove('js');
    body.classList.remove('is-loading');
    $('.loader')?.remove();
    initStudio(null);
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ---------------- Smooth scroll ---------------- */
  let lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    lenis.stop();
  }

  const scrollTo = (target) => {
    if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.4 });
    else (typeof target === 'number' ? window.scrollTo({ top: target, behavior: 'smooth' }) : target.scrollIntoView({ behavior: 'smooth' }));
  };

  /* ---------------- Nav ---------------- */
  const nav = $('[data-nav]');
  let lastY = 0;
  const onScroll = (y) => {
    nav.classList.toggle('is-scrolled', y > 20);
    const goingDown = y > lastY && y > 400;
    if (!body.classList.contains('menu-open')) nav.classList.toggle('is-hidden', goingDown);
    lastY = y;
  };
  if (lenis) lenis.on('scroll', ({ scroll }) => onScroll(scroll));
  else window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });

  const burger = $('[data-burger]');
  const toggleMenu = (open) => {
    body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    if (lenis) open ? lenis.stop() : lenis.start();
  };
  burger.addEventListener('click', () => toggleMenu(!body.classList.contains('menu-open')));

  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      const el = id === '#top' ? 0 : $(id);
      if (el === null) return;
      e.preventDefault();
      toggleMenu(false);
      scrollTo(el);
    });
  });

  const links = $$('.nav__links a');
  links.forEach((a) => {
    const sec = $(a.getAttribute('href'));
    if (!sec) return;
    ScrollTrigger.create({
      trigger: sec, start: 'top 50%', end: 'bottom 50%',
      onToggle: (st) => a.classList.toggle('is-active', st.isActive),
    });
  });

  /* ---------------- Mobile quick-action bar ---------------- */
  const mbar = $('[data-mbar]');
  const contact = $('#contact');
  const updateBar = () => {
    const y = window.scrollY;
    const past = y > window.innerHeight * 0.6;
    const atContact = contact.getBoundingClientRect().top < window.innerHeight * 0.8;
    mbar.classList.toggle('is-visible', past && !atContact);
  };
  window.addEventListener('scroll', updateBar, { passive: true });
  if (lenis) lenis.on('scroll', updateBar);

  /* ---------------- Hero bags ---------------- */
  const bags = $$('[data-bags] .bag');
  const bagInners = bags.map((b) => $('.bag__inner', b));
  const bagShadows = bags.map((b) => {
    const sh = document.createElement('span');
    sh.className = 'bag__shadow';
    b.appendChild(sh);
    return sh;
  });
  const visibleBags = () => bags.filter((b) => b.offsetParent !== null);
  const phone = () => window.matchMedia('(max-width: 560px)').matches;
  // horizontal position in % (phones use their own layout)
  const posOf = (b) => parseFloat(b.style.getPropertyValue(phone() ? '--xm' : '--x')) || 50;
  const isBack = (b) => b.classList.contains('bag--back');
  // Shivneri bag on top, BOPP front row next, jute & co. in the back row
  bags.forEach((b) => {
    const d = Math.abs(posOf(b) - 50);
    b.style.zIndex = b.classList.contains('bag--hero') ? 40 : isBack(b) ? 10 - Math.round(d / 10) : 30 - Math.round(d / 5);
  });

  // gentle idle sway, each bag on its own rhythm
  const startIdle = () => bagInners.forEach((el, i) => {
    gsap.to(el, {
      y: -6 - (i % 3) * 3, rotation: i % 2 ? 1.6 : -1.6,
      duration: 2.4 + (i % 4) * 0.45, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: (i % 5) * 0.18,
    });
  });

  const dropBags = () => {
    const vis = visibleBags();
    const list = vis.map((b) => $('.bag__inner', b));
    const shadows = vis.map((b) => $('.bag__shadow', b));
    // the Shivneri bag lands first, then the front row outwards, then the back row
    const delayOf = (i) => {
      const b = vis[i];
      const d = Math.abs(posOf(b) - 50) / 50;
      return isBack(b) ? 0.22 + d * 0.4 : d * 0.5;
    };
    return gsap.timeline({ onComplete: startIdle })
      .from(shadows, { scale: 0.2, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: (i) => delayOf(i) }, 0.42)
      .from(list, {
        y: () => -(window.innerHeight * 0.75),
        rotation: (i) => ((posOf(vis[i]) - 50) / 50) * 18 + (i % 2 ? 8 : -8),
        opacity: 0,
        duration: 1.05,
        ease: 'back.out(1.5)',
        stagger: (i) => delayOf(i),
      }, 0);
  };

  /* ---------------- Intro ---------------- */
  const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
  const loader = $('.loader');
  const markPaths = $$('.loader .lg-mark path');
  const wordPaths = $$('.loader .lg-word path');
  const entPaths = $$('.loader .lg-ent path');

  gsap.set('.hero__title .word', { yPercent: 110 });
  gsap.set('[data-hero-fade]', { opacity: 0, y: 24 });
  gsap.set('.nav', { opacity: 0, y: -20 });

  if (reduce) {
    loader.remove();
    body.classList.remove('is-loading');
    gsap.set('.hero__title .word, [data-hero-fade], .nav', { clearProps: 'all' });
  } else {
    intro
      .from(markPaths, { opacity: 0, scale: 0.6, y: 18, transformOrigin: '50% 50%', duration: 0.8, stagger: 0.04 })
      .from(wordPaths, { opacity: 0, y: 20, duration: 0.65, stagger: 0.03 }, '-=0.5')
      .from(entPaths, { opacity: 0, duration: 0.55, stagger: 0.01 }, '-=0.45')
      .to('.loader__bar span', { scaleX: 1, duration: 0.85, ease: 'power2.inOut' }, 0.15)
      .to('.loader__logo', { scale: 0.92, opacity: 0, duration: 0.5, ease: 'power3.in' }, '+=0.1')
      .to('.loader__bar', { opacity: 0, duration: 0.25 }, '<')
      .to(loader, { yPercent: -100, duration: 0.85, ease: 'expo.inOut' }, '-=0.1')
      .add(() => { body.classList.remove('is-loading'); lenis?.start(); loader.remove(); ScrollTrigger.refresh(); })
      .add(dropBags(), '-=0.55')
      .to('.hero__title .word', { yPercent: 0, duration: 1.3, stagger: 0.1 }, '-=1.0')
      .to('[data-hero-fade]', { opacity: 1, y: 0, duration: 1.1, stagger: 0.07 }, '-=1.0')
      .to('.nav', { opacity: 1, y: 0, duration: 1 }, '<');
  }

  /* Safety: never leave the page locked behind the loader */
  setTimeout(() => {
    if (body.classList.contains('is-loading')) {
      intro.progress(1);
    }
  }, 6000);

  if (reduce) { initStudio(null); initCounters(true); return; }

  /* ---------------- Hero scroll ---------------- */
  gsap.to('.hero__copy, .hero__cta, .scroll-arrow', {
    y: -90, opacity: 0, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: '45% top', scrub: true },
  });
  // bags fan out and lift away as the hero scrolls off
  const bagScroll = gsap.timeline({
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6, invalidateOnRefresh: true },
  });
  bags.forEach((b, i) => {
    const d = (posOf(b) - 50) / 10;
    bagScroll.to(b, { x: () => d * window.innerWidth * 0.035, y: () => -window.innerHeight * (0.12 + Math.abs(d) * 0.04), rotation: d * 3, ease: 'none' }, 0);
  });

  /* ---------------- Manifesto word scrub ---------------- */
  $$('[data-scrub-words]').forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w) => `<span class="w">${w}</span>`).join(' ');
    gsap.to($$('.w', el), {
      opacity: 1, stagger: 0.12, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: 0.6 },
    });
  });
  gsap.fromTo('.manifesto__leaf', { rotate: -12, y: 80 }, {
    rotate: 6, y: -60, ease: 'none',
    scrollTrigger: { trigger: '.manifesto', start: 'top bottom', end: 'bottom top', scrub: true },
  });

  /* ---------------- Reveals ---------------- */
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1.3, ease: 'expo.out', stagger: 0.09, overwrite: true }),
  });

  /* ---------------- Parallax ---------------- */
  $$('[data-parallax]').forEach((img) => {
    const amt = parseFloat(img.dataset.parallax) || 8;
    gsap.fromTo(img, { yPercent: -amt }, {
      yPercent: amt, ease: 'none',
      scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  /* ---------------- Collections: horizontal pinned scroll ---------------- */
  const mm = gsap.matchMedia();
  const section = $('[data-hscroll]');
  const track = $('[data-htrack]');
  const prog = $('[data-hprogress]');
  const hwrap = $('.hscroll');

  mm.add('(min-width: 861px)', () => {
    const distance = () => track.scrollWidth - window.innerWidth;
    const tween = gsap.to(track, {
      x: () => -distance(), ease: 'none',
      scrollTrigger: {
        trigger: section, start: 'top top', end: () => '+=' + distance(),
        pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1,
        onUpdate: (st) => gsap.set(prog, { scaleX: st.progress }),
      },
    });
    $$('.panel__media img', track).forEach((img) => {
      gsap.fromTo(img, { xPercent: 8 }, {
        xPercent: -8, ease: 'none',
        scrollTrigger: { trigger: img.closest('.panel'), containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
      });
    });
    return () => gsap.set(track, { clearProps: 'transform' });
  });
  mm.add('(max-width: 860px)', () => {
    hwrap.classList.add('is-native');
    const upd = () => {
      const max = hwrap.scrollWidth - hwrap.clientWidth;
      gsap.set(prog, { scaleX: max > 0 ? hwrap.scrollLeft / max : 0 });
    };
    hwrap.addEventListener('scroll', upd, { passive: true });
    upd();
    return () => { hwrap.classList.remove('is-native'); hwrap.removeEventListener('scroll', upd); };
  });

  /* ---------------- Mosaic depth ---------------- */
  $$('.mosaic__item').forEach((el, i) => {
    gsap.fromTo(el, { y: (i % 3) * 30 + 20 }, {
      y: -((i % 3) * 20), ease: 'none',
      scrollTrigger: { trigger: '.mosaic', start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  initStudio(gsap);
  initCounters(false);

  /* Steps line draw */
  gsap.from('.steps span', {
    scale: 0, duration: 0.9, ease: 'back.out(2)', stagger: 0.12,
    scrollTrigger: { trigger: '[data-steps]', start: 'top 80%' },
  });

  window.addEventListener('load', () => ScrollTrigger.refresh());

  /* ================= Helpers ================= */

  function initCounters(instant) {
    $$('[data-count]').forEach((el) => {
      const to = parseFloat(el.dataset.count);
      const fmt = (n) => Math.round(n).toLocaleString('en-IN');
      if (instant || !window.gsap) { el.textContent = fmt(to); return; }
      const o = { v: 0 };
      ScrollTrigger.create({
        trigger: el, start: 'top 90%', once: true,
        onEnter: () => gsap.to(o, { v: to, duration: 2, ease: 'expo.out', onUpdate: () => (el.textContent = fmt(o.v)) }),
      });
    });
  }

  function initStudio(g) {
    const ranges = {
      bopp: [
        ['Parrot green', '#7DBB2E', '12 × 14 × 4', 'bopp-parrot'],
        ['Bottle green', '#1E5A3B', '17 × 14 × 5', 'bopp-bottlegreen'],
        ['Ivory', '#E9E7DC', '17 × 14 × 5', 'bopp-ivory'],
        ['Yellow', '#F2C80F', '15 × 12 × 4', 'bopp-yellow'],
        ['Golden', '#C9962A', '10 × 12 × 4', 'bopp-golden'],
        ['Orange', '#D55A26', '10 × 12 × 4', 'bopp-orange'],
        ['Red', '#C8202B', '10 × 12 × 4', 'bopp-red'],
        ['Baby pink', '#D8AFC8', '15 × 12 × 4', 'bopp-babypink'],
        ['Navy blue', '#3E3F8F', '12 × 14 × 4', 'bopp-navy'],
        ['Brown', '#5A4846', '10 × 12 × 4', 'bopp-brown'],
        ['Black', '#141414', '12 × 14 × 4', 'bopp-black'],
      ],
      metal: [
        ['Rose gold', '#B07D72', '17 × 14 × 5', 'metal-rosegold'],
        ['Golden', '#9C8A2C', '12 × 14 × 4', 'metal-golden'],
        ['Silver', '#B9BCC0', '15 × 12 × 4', 'metal-silver'],
        ['Blue', '#1C6DC0', '15 × 12 × 4', 'metal-blue'],
        ['Red', '#B5122B', '10 × 12 × 4', 'metal-red'],
      ],
      dcut: [
        ['Natural', '#E6DCCB', '10 × 14', 'dcut-beige'],
        ['Yellow', '#EBC24B', '12 × 16', 'dcut-yellow'],
        ['Black', '#1A1A1A', '14 × 19', 'dcut-black'],
        ['Red', '#D8222F', '16 × 21', 'dcut-red'],
      ],
    };

    const studio = $('[data-studio]');
    const imgs = $$('[data-studio-img]', studio);
    const nameEl = $('[data-studio-name]', studio);
    const sizeEl = $('[data-studio-size]', studio);
    const glow = $('[data-glow]', studio);
    const sw = $('[data-swatches]', studio);
    const tabs = $$('[role="tab"]', studio);
    const ind = $('[data-tab-ind]', studio);
    let front = 0;

    // Preload so swaps are instant
    Object.values(ranges).flat().forEach(([, , , f]) => { const i = new Image(); i.src = `/assets/img/${f}.webp`; });

    const show = (item) => {
      const [name, hex, size, file] = item;
      const next = imgs[1 - front];
      next.src = `/assets/img/${file}.webp`;
      next.alt = `${name} bag`;
      const swap = () => {
        imgs[front].classList.remove('is-active');
        next.classList.add('is-active');
        front = 1 - front;
      };
      next.decode ? next.decode().then(swap, swap) : swap();
      glow.style.setProperty('--glow', hex);
      if (g) {
        g.fromTo([nameEl, sizeEl], { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out', stagger: 0.05 });
      }
      nameEl.textContent = name;
      sizeEl.textContent = size;
    };

    const build = (key, initial) => {
      sw.innerHTML = '';
      ranges[key].forEach((item, i) => {
        const b = document.createElement('button');
        b.className = 'swatch';
        b.type = 'button';
        b.setAttribute('role', 'radio');
        b.setAttribute('aria-label', `${item[0]} — ${item[2]}`);
        b.setAttribute('aria-checked', i === 0 ? 'true' : 'false');
        b.title = item[0];
        b.style.setProperty('--c', item[1]);
        b.addEventListener('click', () => {
          $$('.swatch', sw).forEach((s) => s.setAttribute('aria-checked', 'false'));
          b.setAttribute('aria-checked', 'true');
          show(item);
        });
        sw.appendChild(b);
      });
      if (initial) return;
      if (g) g.from($$('.swatch', sw), { scale: 0, duration: 0.6, ease: 'back.out(2)', stagger: 0.03 });
      show(ranges[key][0]);
    };

    const moveInd = (tab) => {
      ind.style.width = tab.offsetWidth + 'px';
      ind.style.transform = `translateX(${tab.offsetLeft}px)`;
    };

    tabs.forEach((t) => t.addEventListener('click', () => {
      tabs.forEach((x) => x.setAttribute('aria-selected', String(x === t)));
      moveInd(t);
      build(t.dataset.range);
    }));

    // initial state already rendered in markup (parrot green)
    build('bopp', true);
    glow.style.setProperty('--glow', ranges.bopp[0][1]);
    requestAnimationFrame(() => moveInd(tabs[0]));
    window.addEventListener('resize', () => moveInd(tabs.find((t) => t.getAttribute('aria-selected') === 'true')));
    document.fonts?.ready.then(() => moveInd(tabs.find((t) => t.getAttribute('aria-selected') === 'true')));
  }
})();
