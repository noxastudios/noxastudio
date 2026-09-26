const STORAGE_KEY = "noxa_posts";


/* =========================
   DEFAULT POSTS
========================= */

const seed = [
  {
    type: "dev",
    category: "script",
    author: "@kutu_studyo",
    title: "Roblox Lua geliştirici arıyorum",
    desc: "FPS oyunu için silah sistemi ve UI üzerinde çalışacak geliştirici arıyoruz.",
    ts: Date.now() - 1000 * 60 * 60 * 5
  },

  {
    type: "proj",
    category: "map",
    author: "@pixelform",
    title: "2D platformer demomu paylaşıyorum",
    desc: "Solo geliştirdiğim bir demo, geri bildirim ve olası ortaklık için paylaşıyorum.",
    ts: Date.now() - 1000 * 60 * 60 * 26
  },

  {
    type: "dev",
    category: "ui",
    author: "@noxdesign",
    title: "Roblox UI Designer arıyorum",
    desc: "Yeni projem için modern ve sade bir arayüz tasarlayabilecek UI Designer arıyorum.",
    ts: Date.now() - 1000 * 60 * 60 * 9
  },

  {
    type: "dev",
    category: "animator",
    author: "@voiddev",
    title: "Animator aranıyor",
    desc: "Roblox projemiz için karakter animasyonları hazırlayabilecek bir animator arıyoruz.",
    ts: Date.now() - 1000 * 60 * 60 * 15
  }
];


/* =========================
   STORAGE
========================= */

function loadPosts() {

  try {

    const raw = localStorage.getItem(STORAGE_KEY);

    if (raw) {
      return JSON.parse(raw);
    }

  } catch (error) {

    console.warn("LocalStorage okunamadı:", error);

  }

  return seed;
}


function savePosts(posts) {

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(posts)
    );

  } catch (error) {

    console.warn("LocalStorage kaydedilemedi:", error);

  }

}


/* =========================
   HELPERS
========================= */

function escapeHtml(value) {

  const div = document.createElement("div");

  div.textContent = value ?? "";

  return div.innerHTML;
}


function timeAgo(timestamp) {

  const diff =
    Math.floor(
      (Date.now() - timestamp) / 1000
    );

  if (diff < 60) {
    return "az önce";
  }

  if (diff < 3600) {
    return `${Math.max(1, Math.floor(diff / 60))} dk önce`;
  }

  if (diff < 86400) {
    return `${Math.floor(diff / 3600)} saat önce`;
  }

  return `${Math.floor(diff / 86400)} gün önce`;
}


function getCategoryName(category) {

  const names = {

    ui: "UI Designer",

    map: "Map Designer",

    script: "Scripter",

    animator: "Animator"

  };

  return names[category] || "Genel";

}


/* =========================
   STATE
========================= */

let posts = loadPosts();

let activeFilter = "all";

let categoryFilter = null;


/* =========================
   ELEMENTS
========================= */

const listEl =
  document.getElementById("list");

const emptyEl =
  document.getElementById("empty");

const postCountEl =
  document.getElementById("postCount");

const form =
  document.getElementById("post-form");


/* =========================
   POST COUNT
========================= */

function updateStats() {

  if (!postCountEl) return;

  postCountEl.textContent = posts.length;

}


/* =========================
   RENDER
========================= */

function render() {

  let filtered = [...posts];


  /* TYPE FILTER */

  if (activeFilter !== "all") {

    filtered = filtered.filter(
      post => post.type === activeFilter
    );

  }


  /* CATEGORY FILTER */

  if (categoryFilter) {

    filtered = filtered.filter(
      post =>
        post.category === categoryFilter
    );

  }


  listEl.innerHTML = "";


  emptyEl.hidden =
    filtered.length !== 0;


  filtered
    .sort((a, b) => b.ts - a.ts)
    .forEach((post, index) => {

      const li =
        document.createElement("li");

      const label =
        post.type === "dev"
          ? "Geliştirici Arıyorum"
          : "Proje Paylaşımı";


      const category =
        getCategoryName(post.category);


      li.innerHTML = `

        <span class="bar bar--${escapeHtml(post.type)}"></span>

        <div>

          <p class="title">
            ${escapeHtml(post.title)}
          </p>

          <p class="desc">
            ${escapeHtml(post.desc)}
          </p>

          <p class="meta">
            ${label}
            ·
            ${category}
            ·
            ${escapeHtml(post.author)}
          </p>

        </div>

        <span class="meta">
          ${timeAgo(post.ts)}
        </span>

      `;


      li.style.animationDelay =
        `${index * 0.05}s`;

      li.animate(
        [
          {
            opacity: 0,
            transform: "translateY(12px)"
          },

          {
            opacity: 1,
            transform: "translateY(0)"
          }
        ],
        {
          duration: 400,
          delay: index * 40,
          easing: "cubic-bezier(.2,.8,.2,1)",
          fill: "both"
        }
      );


      listEl.appendChild(li);

    });


  updateStats();

}


/* =========================
   TYPE FILTERS
========================= */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".filter")
          .forEach(btn =>
            btn.classList.remove("is-active")
          );


        button.classList.add("is-active");


        activeFilter =
          button.dataset.filter;


        categoryFilter = null;


        document
          .querySelectorAll(".category-card")
          .forEach(card =>
            card.classList.remove("selected")
          );


        render();

      }
    );

  });


/* =========================
   CATEGORY FILTERS
========================= */

document
  .querySelectorAll(".category-card")
  .forEach(card => {

    card.addEventListener(
      "click",
      () => {

        const category =
          card.dataset.filter;


        document
          .querySelectorAll(".category-card")
          .forEach(item =>
            item.classList.remove("selected")
          );


        card.classList.add("selected");


        categoryFilter = category;


        activeFilter = "all";


        document
          .querySelectorAll(".filter")
          .forEach(btn =>
            btn.classList.remove("is-active")
          );


        document
          .querySelector(
            '.filter[data-filter="all"]'
          )
          ?.classList.add("is-active");


        document
          .getElementById("pano")
          .scrollIntoView({
            behavior: "smooth"
          });


        render();

      }
    );

  });


/* =========================
   CREATE POST
========================= */

form.addEventListener(
  "submit",
  event => {

    event.preventDefault();


    const data =
      new FormData(form);


    const author =
      String(data.get("author") || "")
        .trim();

    const title =
      String(data.get("title") || "")
        .trim();

    const desc =
      String(data.get("desc") || "")
        .trim();

    const type =
      String(data.get("type") || "dev");


    if (!author || !title || !desc) {

      return;

    }


    const post = {

      type,

      category: "script",

      author,

      title,

      desc,

      ts: Date.now()

    };


    posts.push(post);

    savePosts(posts);


    form.reset();


    activeFilter = "all";

    categoryFilter = null;


    document
      .querySelectorAll(".filter")
      .forEach(btn =>
        btn.classList.remove("is-active")
      );


    document
      .querySelector(
        '.filter[data-filter="all"]'
      )
      ?.classList.add("is-active");


    document
      .querySelectorAll(".category-card")
      .forEach(card =>
        card.classList.remove("selected")
      );


    render();


    document
      .getElementById("pano")
      .scrollIntoView({
        behavior: "smooth"
      });

  }
);


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
  document.querySelector(".cursor-glow");


document.addEventListener(
  "mousemove",
  event => {

    if (!cursorGlow) return;


    cursorGlow.style.left =
      `${event.clientX}px`;

    cursorGlow.style.top =
      `${event.clientY}px`;

  }
);


/* =========================
   MOUSE PARALLAX
========================= */

const heroPanel =
  document.querySelector(".hero__panel");


if (heroPanel) {

  document.addEventListener(
    "mousemove",
    event => {

      if (window.innerWidth < 900) {
        return;
      }


      const x =
        (event.clientX / window.innerWidth - 0.5) * 8;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 5;


      heroPanel.style.transform =
        `
        perspective(1000px)
        rotateY(${-5 + x}deg)
        rotateX(${2 - y}deg)
        `;

    }
  );

}


/* =========================
   BUTTON RIPPLE
========================= */

document
  .querySelectorAll(".btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      event => {

        const ripple =
          document.createElement("span");


        const rect =
          button.getBoundingClientRect();


        const size =
          Math.max(
            rect.width,
            rect.height
          );


        ripple.style.position =
          "absolute";

        ripple.style.width =
          `${size}px`;

        ripple.style.height =
          `${size}px`;

        ripple.style.left =
          `${event.clientX - rect.left - size / 2}px`;

        ripple.style.top =
          `${event.clientY - rect.top - size / 2}px`;

        ripple.style.borderRadius =
          "50%";

        ripple.style.background =
          "rgba(255,255,255,.18)";

        ripple.style.pointerEvents =
          "none";

        ripple.style.transform =
          "scale(0)";


        button.appendChild(ripple);


        ripple.animate(
          [
            {
              transform: "scale(0)",
              opacity: 1
            },

            {
              transform: "scale(1.8)",
              opacity: 0
            }
          ],
          {
            duration: 550,
            easing: "ease-out"
          }
        ).onfinish = () => {

          ripple.remove();

        };

      }
    );

  });


/* =========================
   REFRESH TIME
========================= */

setInterval(
  render,
  60000
);


/* =========================
   INITIAL RENDER
========================= */

render();