/* ==========================================================
   NOXA STUDIOS - ortak kod
   ========================================================== */
const CONFIG = {
  // Google Cloud Console'dan aldığın OAuth Client ID
  GOOGLE_CLIENT_ID: "BURAYA_CLIENT_ID.apps.googleusercontent.com",
  // Owner Gmail hesabı (sadece bu hesap ekleme/silme yapabilir)
  OWNER_EMAIL: "noxastudiosh1@gmail.com"
};

const PAGES = [
  { href: "index.html",   label: "Ana Sayfa" },
  { href: "team.html",    label: "Ekip" },
  { href: "videos.html",  label: "Videolar" },
  { href: "plugins.html", label: "Pluginler" },
  { href: "contact.html", label: "İletişim" }
];

/* ---------- Güvenli HTML çıktısı ---------- */
function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[c]);
}

/* ---------- Veri saklama (localStorage) ---------- */
const DB = {
  get(key, fallback) {
    try {
      const v = JSON.parse(localStorage.getItem("noxa_" + key));
      return v ?? fallback;
    } catch { return fallback; }
  },
  set(key, value) {
    localStorage.setItem("noxa_" + key, JSON.stringify(value));
  }
};

/* ---------- Tema (mor galaksi / beyaz) ---------- */
const Theme = {
  get current() {
    return localStorage.getItem("noxa_theme") || "dark";
  },
  apply(name) {
    document.documentElement.setAttribute("data-theme", name);
    localStorage.setItem("noxa_theme", name);
    const btn = document.getElementById("themeToggle");
    if (btn) {
      btn.textContent = name === "dark" ? "☀" : "☾";
      btn.title = name === "dark" ? "Beyaz temaya geç" : "Mor temaya geç";
    }
  },
  toggle() {
    this.apply(this.current === "dark" ? "light" : "dark");
  }
};
// Sayfa çizilmeden önce temayı uygula (titreme olmasın)
document.documentElement.setAttribute("data-theme", Theme.current);

/* ---------- Galaksi arka planı (sadece koyu temada) ---------- */
function initGalaxy() {
  const canvas = document.getElementById("galaxy");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [];

  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const count = Math.floor((innerWidth * innerHeight) / 4500);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      speed: Math.random() * 0.22 + 0.03,
      phase: Math.random() * Math.PI * 2,
      rgb: Math.random() < 0.3 ? "170,120,255" : "225,210,255"
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const nebula = ctx.createRadialGradient(
      canvas.width * 0.82, canvas.height * 0.18, 0,
      canvas.width * 0.82, canvas.height * 0.18, canvas.width * 0.55);
    nebula.addColorStop(0, "rgba(130,60,240,0.20)");
    nebula.addColorStop(1, "rgba(130,60,240,0)");
    ctx.fillStyle = nebula;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const s of stars) {
      s.phase += 0.02;
      const alpha = 0.35 + 0.65 * Math.abs(Math.sin(s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.rgb},${alpha})`;
      ctx.fill();
      s.y += s.speed;
      if (s.y > canvas.height) s.y = 0;
    }
    requestAnimationFrame(draw);
  }

  resize();
  addEventListener("resize", resize);
  requestAnimationFrame(draw);
}

/* ---------- Navigasyon ---------- */
function renderNav() {
  const header = document.getElementById("nav");
  if (!header) return;
  const current = location.pathname.split("/").pop() || "index.html";
  header.innerHTML = `
    <a class="brand" href="index.html"><span class="brand-mark"></span>NOXA<span>STUDIOS</span></a>
    <nav class="links">
      ${PAGES.map(p => `<a href="${p.href}" class="${p.href === current ? "active" : ""}">${p.label}</a>`).join("")}
    </nav>
    <div class="header-right">
      <button class="theme-toggle" id="themeToggle" type="button"></button>
      <div class="auth" id="auth"></div>
    </div>`;
  document.getElementById("themeToggle").onclick = () => Theme.toggle();
  Theme.apply(Theme.current);
}

/* ---------- Google (Gmail) girişi ---------- */
const Auth = {
  get user() {
    try { return JSON.parse(localStorage.getItem("noxa_user")); } catch { return null; }
  },
  set user(u) {
    if (u) localStorage.setItem("noxa_user", JSON.stringify(u));
    else localStorage.removeItem("noxa_user");
  },
  get isOwner() {
    return !!(this.user && this.user.email &&
      this.user.email.toLowerCase() === CONFIG.OWNER_EMAIL.toLowerCase());
  },
  logout() {
    this.user = null;
    location.reload();
  }
};

// Google'ın gönderdiği JWT içindeki bilgiyi okur
function parseJwt(token) {
  const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
  const json = decodeURIComponent(atob(base64).split("").map(
    c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)).join(""));
  return JSON.parse(json);
}

function handleCredential(response) {
  const payload = parseJwt(response.credential);
  Auth.user = { email: payload.email, name: payload.name, picture: payload.picture };
  location.reload();
}

function renderAuth() {
  const box = document.getElementById("auth");
  if (!box) return;
  const u = Auth.user;
  if (u) {
    box.innerHTML = `
      <div class="user-chip">
        ${u.picture ? `<img src="${escapeHtml(u.picture)}" alt="">` : ""}
        <span>${escapeHtml(u.name)}</span>
        ${Auth.isOwner ? '<span class="owner-badge">OWNER</span>' : ""}
      </div>
      <button class="btn ghost small" onclick="Auth.logout()">Çıkış</button>`;
  } else {
    box.innerHTML = `<div id="gsi"></div>`;
    loadGoogleButton();
  }
}

function loadGoogleButton() {
  const init = () => {
    google.accounts.id.initialize({
      client_id: CONFIG.GOOGLE_CLIENT_ID,
      callback: handleCredential
    });
    google.accounts.id.renderButton(document.getElementById("gsi"), {
      theme: Theme.current === "dark" ? "filled_black" : "outline",
      size: "medium", shape: "pill", text: "signin_with"
    });
  };
  if (window.google && google.accounts) return init();
  const s = document.createElement("script");
  s.src = "https://accounts.google.com/gsi/client";
  s.async = true;
  s.onload = init;
  document.head.appendChild(s);
}

/* ---------- Basit pencere (modal) ---------- */
function openModal(title, fields, onSubmit) {
  const wrap = document.createElement("div");
  wrap.className = "modal-bg";
  wrap.innerHTML = `
    <form class="modal">
      <h3>${escapeHtml(title)}</h3>
      ${fields.map(f => f.type === "textarea"
        ? `<label>${escapeHtml(f.label)}<textarea name="${f.name}" placeholder="${escapeHtml(f.placeholder || "")}"></textarea></label>`
        : `<label>${escapeHtml(f.label)}<input name="${f.name}" placeholder="${escapeHtml(f.placeholder || "")}" ${f.required ? "required" : ""}></label>`
      ).join("")}
      <div class="row">
        <button type="button" class="btn ghost" data-close>İptal</button>
        <button type="submit" class="btn">Ekle</button>
      </div>
    </form>`;
  document.body.appendChild(wrap);
  wrap.addEventListener("click", e => { if (e.target === wrap) wrap.remove(); });
  wrap.querySelector("[data-close]").onclick = () => wrap.remove();
  wrap.querySelector("form").onsubmit = e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    Object.keys(data).forEach(k => data[k] = data[k].trim());
    onSubmit(data);
    wrap.remove();
  };
  wrap.querySelector("input, textarea")?.focus();
}

/* ---------- Başlangıç ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initGalaxy();
  renderNav();
  renderAuth();
});
