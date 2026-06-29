/* site.js — view-more lists + full-screen client search. Loaded with `defer`. No build step. */
(function () {
  'use strict';
  var LIMIT = 7;

  /* ----------------------------------------------------------------
     1) "View more" for catalogue lists (Project / Blog / Book)
     Items past LIMIT are hidden via CSS (.js …:nth-child(n+8)); this
     just adds the button and expands. No-JS users see everything.
  ----------------------------------------------------------------- */
  function setupViewMore() {
    var lists = document.querySelectorAll('.catalogue');
    Array.prototype.forEach.call(lists, function (list) {
      var items = list.querySelectorAll(':scope > .catalogue-item');
      if (items.length <= LIMIT) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'view-more';
      btn.innerHTML = 'View more <span>(' + (items.length - LIMIT) + ')</span>';
      list.insertAdjacentElement('afterend', btn);
      btn.addEventListener('click', function () {
        list.classList.add('is-expanded');
        btn.remove();
      });
    });
  }

  /* ----------------------------------------------------------------
     2) Full-screen search overlay (client-side, static index)
  ----------------------------------------------------------------- */
  var overlay = document.getElementById('search-overlay');
  var toggle = document.getElementById('search-toggle');
  var closeBtn = document.getElementById('search-close');
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var statusEl = document.getElementById('search-status');
  var index = null, gsapTried = false, debounce;

  function loadIndex() {
    if (index) return Promise.resolve(index);
    return fetch('/search.json')
      .then(function (r) { return r.json(); })
      .then(function (d) { index = d; return d; })
      .catch(function () { index = []; return index; });
  }

  // GSAP is vendored locally and only fetched the first time search opens.
  function ensureGSAP() {
    return new Promise(function (resolve) {
      if (window.gsap || gsapTried) return resolve();
      gsapTried = true;
      var s = document.createElement('script');
      s.src = '/js/gsap.min.js';
      s.onload = resolve;
      s.onerror = resolve;
      document.head.appendChild(s);
    });
  }

  function esc(s) {
    return (s || '').replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function render(qRaw) {
    results.innerHTML = '';
    var q = (qRaw || '').trim().toLowerCase();
    if (!q) { statusEl.textContent = ''; return; }
    if (!index) { statusEl.textContent = 'Loading…'; return; }
    var matches = index.filter(function (it) {
      return (it.title + ' ' + it.subtitle + ' ' + it.type + ' ' + it.description)
        .toLowerCase().indexOf(q) !== -1;
    });
    if (!matches.length) { statusEl.textContent = 'No results for “' + qRaw.trim() + '”'; return; }
    statusEl.textContent = matches.length + ' result' + (matches.length > 1 ? 's' : '');
    var frag = document.createDocumentFragment();
    matches.forEach(function (it) {
      var li = document.createElement('li');
      li.className = 'search-result';
      li.innerHTML =
        '<a href="' + esc(it.url) + '">' +
        (it.type ? '<span class="sr-type">' + esc(it.type) + '</span>' : '') +
        '<span class="sr-title">' + esc(it.title) + '</span>' +
        (it.subtitle ? '<span class="sr-sub">' + esc(it.subtitle) + '</span>' : '') +
        '</a>';
      frag.appendChild(li);
    });
    results.appendChild(frag);
    if (window.gsap) {
      window.gsap.from('#search-results > li', {
        opacity: 0, y: 14, duration: 0.35, stagger: 0.05, ease: 'power2.out'
      });
    }
  }

  // Reliable scroll lock (iOS Safari ignores body{overflow:hidden}, so freeze
  // the body with position:fixed and restore the scroll position on close).
  var savedScrollY = 0;
  function lockScroll() {
    savedScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    var b = document.body.style;
    b.position = 'fixed';
    b.top = (-savedScrollY) + 'px';
    b.left = '0';
    b.right = '0';
    b.width = '100%';
    b.overflow = 'hidden';
  }
  function unlockScroll() {
    var b = document.body.style;
    b.position = ''; b.top = ''; b.left = ''; b.right = ''; b.width = ''; b.overflow = '';
    window.scrollTo(0, savedScrollY);
  }

  // Keyboard-aware sizing: pin the overlay to the *visual* viewport so it always
  // covers exactly the visible area when the on-screen keyboard is up. position:fixed
  // alone leaves a gap on iOS Chrome; the VisualViewport API fixes that.
  function syncViewport() {
    var vv = window.visualViewport;
    if (!vv) return;
    var s = overlay.style;
    s.top = vv.offsetTop + 'px';
    s.left = vv.offsetLeft + 'px';
    s.right = 'auto';
    s.bottom = 'auto';
    s.width = vv.width + 'px';
    s.height = vv.height + 'px';
  }
  function clearViewport() {
    var s = overlay.style;
    s.top = s.left = s.right = s.bottom = s.width = s.height = '';
  }
  function vvListen(on) {
    if (!window.visualViewport) return;
    var m = on ? 'addEventListener' : 'removeEventListener';
    window.visualViewport[m]('resize', syncViewport);
    window.visualViewport[m]('scroll', syncViewport);
  }

  function open() {
    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
    lockScroll();
    syncViewport();
    vvListen(true);
    loadIndex().then(function () { if (input.value) render(input.value); });
    ensureGSAP().then(function () {
      if (window.gsap) window.gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.22, ease: 'power2.out' });
    });
    setTimeout(function () { input.focus(); }, 40);
  }

  function close() {
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
    vvListen(false);
    clearViewport();
    unlockScroll();
    input.value = '';
    results.innerHTML = '';
    statusEl.textContent = '';
  }

  if (toggle && overlay && input) {
    toggle.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !overlay.hidden) close();
    });
    input.addEventListener('input', function () {
      clearTimeout(debounce);
      debounce = setTimeout(function () { render(input.value); }, 120);
    });
  }

  /* ----------------------------------------------------------------
     3) Prefetch internal pages on hover/touch.
     GitHub Pages can be slow to first-byte from some regions; warming
     the next page before the click makes navigation feel instant.
  ----------------------------------------------------------------- */
  function setupPrefetch() {
    var done = {};
    var canPrefetch = (function () {
      var l = document.createElement('link');
      return l.relList && l.relList.supports && l.relList.supports('prefetch');
    })();

    function prefetch(url) {
      if (!url || done[url]) return;
      done[url] = true;
      if (canPrefetch) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
      } else {
        fetch(url, { credentials: 'same-origin' }).catch(function () {});
      }
    }

    function urlFor(a) {
      if (!a || !a.href) return null;
      if (a.hostname !== location.hostname || a.protocol !== location.protocol) return null; // same-origin only
      if (a.hasAttribute('target')) return null;            // skip new-tab / external links
      if (a.href === location.href) return null;
      if (a.hash && a.pathname === location.pathname) return null; // same-page anchor
      return a.href;
    }

    function onPoint(e) {
      var a = e.target && e.target.closest ? e.target.closest('a') : null;
      var url = urlFor(a);
      if (url) prefetch(url);
    }

    document.addEventListener('mouseover', onPoint, { passive: true });
    document.addEventListener('touchstart', onPoint, { passive: true });
  }

  setupViewMore();
  setupPrefetch();
})();
