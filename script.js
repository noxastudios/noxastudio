/* ===== Ayarlar ===== */
// Google girişi için Google Cloud Console'dan OAuth Client ID alıp yaz.
const GOOGLE_CLIENT_ID = "";
// Video ve plugin ekleyebilecek yönetici e-postaları (kendi e-postanı yaz, bu e-postayla kayıt ol).
const ADMIN_EMAILS = ["noxastudiosh1@gmail.com"]; // başka e-postayla da girmek istersen virgülle ekle
// İletişim formundaki mesajlar bu adrese gelir.
const CONTACT_EMAIL = "noxastudiosh1@gmail.com";

/* ===== Çeviriler ===== */
const I18N = {
  tr: {
    nav_home:"Ana Sayfa",nav_board:"Pano",nav_vid:"Videolar",nav_plug:"Pluginler",nav_comm:"Topluluk",nav_team:"Ekip",nav_contact:"İletişim",ct_t:"İletişim",ct_s:"Bize bir mesaj bırak, doğrudan e-postamıza düşsün.",ct_name:"Adın",ct_mail:"E-posta adresin",ct_msg:"Mesajın",ct_send:"İletişime Geç",ct_sending:"Gönderiliyor...",ct_ok:"Mesajın gönderildi, teşekkürler!",ct_fail:"Gönderilemedi, e-posta uygulaman açılıyor.",team_t:"Ekip",team_s:"Noxa Studio'yu oluşturan insanlar.",tm_name:"İsim",tm_role:"Rol (ör. Animatör)",tm_photo:"Profil fotoğrafı",no_team:"Henüz ekip üyesi eklenmedi.",login:"Giriş Yap",register:"Kayıt Ol",logout:"Çıkış",
    pill:"Roblox Geliştirici Topluluğu",h1a:"Hayalindeki",h1b:"Roblox oyununu",h1c:"birlikte geliştirelim.",
    sub:"Script, UI, model ve animasyon için doğru ekibi bul, projeni paylaş, topluluktan geri bildirim al.",
    cta1:"▶ Panoyu keşfet",chip:"⚡ Gerçek paylaşımlar",
    sec_t:"Bölümler",sec_s:"İhtiyacın olan bölüme geç.",s_board:"Topluluk Panosu",s_board_d:"Proje paylaş, geliştirici ara.",
    s_vid:"Videolar",s_vid_d:"Duyurular ve eğitim videoları.",s_plug:"Pluginler",s_plug_d:"Noxa'nın kendi Roblox Studio pluginleri.",
    cat_t:"Kategoriler",cat_s:"Bir kategori seç, ilgili paylaşımları panoda gör.",board_t:"Topluluk Panosu",search:"Ara...",
    t_all:"Hepsi",t_share:"Paylaşım",t_hire:"Geliştirici aranıyor",sh_t:"Paylaş",sh_s:"Projeni paylaş ya da geliştirici ara. Paylaşmak için giriş yapmalısın.",
    p_title:"Başlık",p_desc:"Açıklama",p_link:"Link (opsiyonel)",p_send:"Yayınla",
    dc_t:"Discord'a katıl",dc_s:"Sohbet et, geri bildirim al, ekip kur.",dc_b:"Discord'a Katıl",
    a_name:"Kullanıcı adı",a_mail:"E-posta",a_pass:"Şifre (min 6)",or:"veya",google:"Google ile devam et",
    all:"Tümü",posts:"paylaşım",empty:"Henüz paylaşım yok. İlk paylaşımı sen yap!",noresult:"Sonuç bulunamadı.",
    need_login:"Önce giriş yapmalısın.",posted:"Yayınlandı!",deleted:"Silindi.",welcome:"Hoş geldin",
    bad_cred:"E-posta veya şifre hatalı.",mail_used:"Bu e-posta zaten kayıtlı.",name_req:"Kullanıcı adı gerekli.",
    no_gid:"Google girişi için script.js içine GOOGLE_CLIENT_ID ekle.",open:"Aç →",del:"Sil",
    vid_t:"Videolar",vid_s:"Duyurular ve eğitim videoları. İzle'ye basınca YouTube'da açılır.",plug_t:"Pluginler",plug_s:"Noxa Studio'nun kendi geliştirdiği pluginler.",
    watch:"İzle",download:"İndir / Aç",v_link:"YouTube linki",v_title:"Başlık",v_desc:"Açıklama (opsiyonel)",pl_name:"Plugin adı",pl_link:"İndirme / Toolbox linki",pl_ver:"Sürüm (ör. v1.0)",
    add:"Ekle",exp:"content.js indir",exp_hint:"Herkesin görmesi için indirdiğin content.js dosyasını sitedeki eskisiyle değiştir.",adm:"Yönetici paneli",
    no_vid:"Henüz video eklenmedi.",no_plug:"Henüz plugin eklenmedi.",bad_yt:"Geçerli bir YouTube linki gir.",added:"Eklendi!",
    cats:{animation:["Animasyon","Karakter, emote, savaş animasyonları"],script:["Script","Lua sistemleri ve modüller"],model:["3D Model","Mesh, prop ve haritalar"],ui:["UI / GUI","Arayüz ve menü tasarımları"],vfx:["VFX","Efekt ve partikül sistemleri"],project:["Projeler","Tam oyun ve proje paylaşımları"],plugin:["Plugin","Roblox Studio pluginleri"]}
  },
  en: {
    nav_home:"Home",nav_board:"Board",nav_vid:"Videos",nav_plug:"Plugins",nav_comm:"Community",nav_team:"Team",nav_contact:"Contact",ct_t:"Contact",ct_s:"Leave us a message and it lands straight in our inbox.",ct_name:"Your name",ct_mail:"Your email",ct_msg:"Your message",ct_send:"Get in touch",ct_sending:"Sending...",ct_ok:"Message sent, thank you!",ct_fail:"Could not send, opening your email app.",team_t:"Team",team_s:"The people behind Noxa Studio.",tm_name:"Name",tm_role:"Role (e.g. Animator)",tm_photo:"Profile photo",no_team:"No team members added yet.",login:"Log In",register:"Sign Up",logout:"Log out",
    pill:"Roblox Developer Community",h1a:"Let's build your",h1b:"dream Roblox game",h1c:"together.",
    sub:"Find the right team for scripts, UI, models and animation, share your project and get feedback from the community.",
    cta1:"▶ Explore the board",chip:"⚡ Real submissions",
    sec_t:"Sections",sec_s:"Jump to what you need.",s_board:"Community Board",s_board_d:"Share projects, find developers.",
    s_vid:"Videos",s_vid_d:"Announcements and tutorials.",s_plug:"Plugins",s_plug_d:"Noxa's own Roblox Studio plugins.",
    cat_t:"Categories",cat_s:"Pick a category to see related posts on the board.",board_t:"Community Board",search:"Search...",
    t_all:"All",t_share:"Shared work",t_hire:"Developer wanted",sh_t:"Share",sh_s:"Share your project or look for a developer. You need to log in to post.",
    p_title:"Title",p_desc:"Description",p_link:"Link (optional)",p_send:"Publish",
    dc_t:"Join our Discord",dc_s:"Chat, get feedback, build a team.",dc_b:"Join Discord",
    a_name:"Username",a_mail:"Email",a_pass:"Password (min 6)",or:"or",google:"Continue with Google",
    all:"All",posts:"posts",empty:"No posts yet. Be the first to share!",noresult:"No results found.",
    need_login:"Please log in first.",posted:"Published!",deleted:"Deleted.",welcome:"Welcome",
    bad_cred:"Wrong email or password.",mail_used:"This email is already registered.",name_req:"Username is required.",
    no_gid:"Add GOOGLE_CLIENT_ID in script.js to enable Google sign-in.",open:"Open →",del:"Delete",
    vid_t:"Videos",vid_s:"Announcements and tutorials. Watch opens YouTube.",plug_t:"Plugins",plug_s:"Plugins developed by Noxa Studio.",
    watch:"Watch",download:"Download / Open",v_link:"YouTube link",v_title:"Title",v_desc:"Description (optional)",pl_name:"Plugin name",pl_link:"Download / Toolbox link",pl_ver:"Version (e.g. v1.0)",
    add:"Add",exp:"Download content.js",exp_hint:"To make it visible to everyone, replace the site's old content.js with the downloaded one.",adm:"Admin panel",
    no_vid:"No videos yet.",no_plug:"No plugins yet.",bad_yt:"Enter a valid YouTube link.",added:"Added!",
    cats:{animation:["Animation","Character, emote, combat animations"],script:["Script","Lua systems and modules"],model:["3D Model","Meshes, props and maps"],ui:["UI / GUI","Interface and menu designs"],vfx:["VFX","Effects and particle systems"],project:["Projects","Full games and project showcases"],plugin:["Plugin","Roblox Studio plugins"]}
  }
};
const CAT_ICONS = {animation:"🎬",script:"{ }",model:"🧊",ui:"🖼️",vfx:"✨",project:"🚀",plugin:"🔌"};
const CATS = Object.keys(CAT_ICONS);
const page = document.body.dataset.page;

/* ===== Yardımcılar ===== */
const $ = s => document.querySelector(s);
const on = (s,e,f) => { const el=$(s); if(el) el[e]=f; };
const store = {
  get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},
  set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}}
};
let lang = store.get("noxa_lang","tr");
let user = store.get("noxa_session",null);
let authMode = "login";
let activeCat = new URLSearchParams(location.search).get("cat");
if(!CATS.includes(activeCat)) activeCat = "all";
const t = k => I18N[lang][k] ?? k;
const esc = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fixUrl = u => u && !/^https?:\/\//i.test(u) ? "https://"+u : u;
const fmtDate = d => new Date(d).toLocaleDateString(lang==="tr"?"tr-TR":"en-US");
const isAdmin = () => !!user && ADMIN_EMAILS.map(e=>e.toLowerCase()).includes(String(user.email).toLowerCase());
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2600)}
async function hash(s){const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}
const getPosts = () => store.get("noxa_posts",[]);
const loadC = () => { const c = store.get("noxa_content",null) || window.NOXA_CONTENT || {}; return {videos:c.videos||[],plugins:c.plugins||[],team:c.team||[]}; };
const saveC = c => store.set("noxa_content",c);
const ytId = u => { const m=String(u).match(/(?:youtu\.be\/|[?&]v=|shorts\/|embed\/|live\/)([\w-]{11})/); return m && m[1]; };

/* ===== Ortak yerleşim (menü, alt bilgi, giriş penceresi) ===== */
const NAV = [["categories","cat_t"],["videos","nav_vid"],["plugins","nav_plug"],["board","nav_board"],["share","sh_t"],["team","nav_team"],["contact","nav_contact"],["community","nav_comm"]];
document.querySelectorAll("header.nav,.foot,.modal,.toast").forEach(e=>e.remove());
document.body.insertAdjacentHTML("afterbegin",`
<header class="nav">
  <a class="logo" href="#top"><span class="logo-mark">N</span>Noxa <i>Studio</i></a>
  <nav class="links" id="links">${NAV.map(([p,k])=>`<a href="#${p}" data-i18n="${k}"></a>`).join("")}</nav>
  <div class="nav-right">
    <div class="lang"><button data-lang="tr">TR</button><button data-lang="en">EN</button></div>
    <button class="icon-btn" id="themeBtn">☾</button>
    <span id="userBox"></span>
    <button class="btn btn-primary" id="loginBtn" data-i18n="login"></button>
    <button class="burger" id="burger">☰</button>
  </div>
</header>`);
document.body.insertAdjacentHTML("beforeend",`
<footer class="foot">© ${new Date().getFullYear()} Noxa Studio</footer>
<div class="modal" id="modal"><div class="card modal-box">
  <button class="x" id="closeModal">✕</button>
  <div class="tabs"><button id="tabLogin" class="on" data-i18n="login"></button><button id="tabReg" data-i18n="register"></button></div>
  <form id="authForm">
    <input id="aName" data-i18n-ph="a_name" hidden>
    <input id="aMail" type="email" required data-i18n-ph="a_mail">
    <input id="aPass" type="password" required minlength="6" data-i18n-ph="a_pass">
    <p class="err" id="authErr"></p>
    <button class="btn btn-primary big" type="submit" id="authSubmit"></button>
  </form>
  <div class="or"><span data-i18n="or"></span></div>
  <button class="btn btn-ghost big" id="googleBtn">G &nbsp;<span data-i18n="google"></span></button>
</div></div><div class="toast" id="toast"></div>`);

/* ===== Dil / Tema ===== */
function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));
  document.querySelectorAll("[data-i18n-ph]").forEach(e=>e.placeholder=t(e.dataset.i18nPh));
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.lang===lang));
  if($("#pCat")) $("#pCat").innerHTML = CATS.map(c=>`<option value="${c}">${I18N[lang].cats[c][0]}</option>`).join("");
  setMode(authMode); refresh();
}
function refresh(){ renderUser(); renderCats(); renderFilters(); renderPosts(); adminBox(); renderContent(); renderTeam(); teamForm(); }
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>{lang=b.dataset.lang;store.set("noxa_lang",lang);applyLang()});
function applyTheme(th){document.documentElement.dataset.theme=th;$("#themeBtn").textContent=th==="light"?"☀":"☾";store.set("noxa_theme",th)}
$("#themeBtn").onclick=()=>applyTheme(document.documentElement.dataset.theme==="light"?"dark":"light");
applyTheme(store.get("noxa_theme","dark"));

/* ===== Kategoriler (sayılar gerçek veriden) ===== */
function renderCats(){
  const el=$("#catGrid"); if(!el) return;
  el.innerHTML = CATS.map(c=>{
    const [n,d]=I18N[lang].cats[c], cnt=getPosts().filter(p=>p.cat===c).length;
    return `<a class="card cat" href="#board" data-cat="${c}"><div class="ic">${CAT_ICONS[c]}</div><h3>${n}</h3><p>${d}</p><small>${cnt} ${t("posts")}</small></a>`;
  }).join("");
  el.querySelectorAll(".cat").forEach(a=>a.onclick=()=>{activeCat=a.dataset.cat;renderFilters();renderPosts()});
}
function renderFilters(){
  const el=$("#filters"); if(!el) return;
  el.innerHTML=[["all",t("all")],...CATS.map(c=>[c,I18N[lang].cats[c][0]])].map(([k,n])=>`<button class="f ${k===activeCat?"on":""}" data-k="${k}">${n}</button>`).join("");
  el.querySelectorAll(".f").forEach(b=>b.onclick=()=>{activeCat=b.dataset.k;renderFilters();renderPosts()});
}

/* ===== Pano ===== */
function renderPosts(){
  const el=$("#posts"); if(!el) return;
  const q=$("#search").value.trim().toLowerCase(), type=$("#typeFilter").value, all=getPosts();
  const list=all.filter(p=>(activeCat==="all"||p.cat===activeCat)&&(type==="all"||p.type===type)&&(!q||(p.title+" "+p.desc).toLowerCase().includes(q))).sort((a,b)=>b.date-a.date);
  if(!list.length){el.innerHTML=`<div class="empty">${all.length?t("noresult"):t("empty")}</div>`;return}
  el.innerHTML=list.map(p=>`
    <article class="card post">
      <div class="meta"><span class="tag ${p.type==="hire"?"hire":""}">${p.type==="hire"?t("t_hire"):t("t_share")}</span><span class="tag">${I18N[lang].cats[p.cat][0]}</span></div>
      <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
      <div class="meta"><span>@${esc(p.author)}</span><span>${fmtDate(p.date)}</span>
      ${p.link?`<a class="lnk" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer">${t("open")}</a>`:""}
      ${user&&user.email===p.email?`<button class="del" data-id="${p.id}">${t("del")}</button>`:""}</div>
    </article>`).join("");
  el.querySelectorAll(".del").forEach(b=>b.onclick=()=>{store.set("noxa_posts",getPosts().filter(p=>p.id!==b.dataset.id));renderPosts();toast(t("deleted"))});
}
on("#search","oninput",renderPosts);
on("#typeFilter","onchange",renderPosts);
on("#postForm","onsubmit",e=>{
  e.preventDefault();
  if(!user){toast(t("need_login"));openModal("login");return}
  const posts=getPosts();
  posts.push({id:Date.now().toString(36),type:$("#pType").value,cat:$("#pCat").value,title:$("#pTitle").value.trim(),desc:$("#pDesc").value.trim(),link:fixUrl($("#pLink").value.trim()),author:user.name,email:user.email,date:Date.now()});
  store.set("noxa_posts",posts); e.target.reset(); renderPosts(); toast(t("posted"));
});

/* ===== Videolar ve Pluginler (sadece yönetici ekler) ===== */
const KINDS = ["videos","plugins"];
function adminBox(){
  KINDS.forEach(key=>{
    const box=$("#admin-"+key); if(!box) return;
    if(!isAdmin()){box.innerHTML="";return}
    const v=key==="videos", id=k=>`${key}-${k}`;
    box.innerHTML=`<form class="card form" id="${id("form")}"><span class="tag hire" style="width:max-content">${t("adm")}</span>
      <input id="${id("f1")}" required ${v?'type="url"':'maxlength="60"'} placeholder="${t(v?"v_link":"pl_name")}">
      <input id="${id("f2")}" required ${v?'maxlength="100"':'type="url"'} placeholder="${t(v?"v_title":"pl_link")}">
      <textarea id="${id("f3")}" rows="3" maxlength="400" placeholder="${t("v_desc")}"></textarea>
      ${v?"":`<input id="${id("f4")}" maxlength="20" placeholder="${t("pl_ver")}">`}
      <div class="row"><button class="btn btn-primary" type="submit">${t("add")}</button><button class="btn btn-ghost" type="button" id="${id("exp")}">${t("exp")}</button></div>
      <p class="mini">${t("exp_hint")}</p></form>`;
    $("#"+id("form")).onsubmit=e=>{
      e.preventDefault();
      const f=k=>($("#"+id(k))?.value||"").trim(), c=loadC(), uid=Date.now().toString(36);
      if(v){const y=ytId(f("f1")); if(!y){toast(t("bad_yt"));return}
        c.videos.push({id:uid,yt:y,title:f("f2"),desc:f("f3"),date:Date.now()});}
      else c.plugins.push({id:uid,name:f("f1"),url:fixUrl(f("f2")),desc:f("f3"),ver:f("f4"),date:Date.now()});
      saveC(c); e.target.reset(); renderContent(); toast(t("added"));
    };
    $("#"+id("exp")).onclick=()=>{
      const blob=new Blob(["window.NOXA_CONTENT = "+JSON.stringify(loadC(),null,2)+";"],{type:"text/javascript"});
      const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="content.js"; a.click();
    };
  });
}
function renderContent(){
  KINDS.forEach(key=>{
    const el=$("#items-"+key); if(!el) return;
    const v=key==="videos", adm=isAdmin();
    const list=loadC()[key].slice().sort((a,b)=>b.date-a.date);
    if(!list.length){el.innerHTML=`<div class="empty">${t(v?"no_vid":"no_plug")}</div>`;return}
    const d=i=>adm?`<button class="del" data-id="${i.id}">${t("del")}</button>`:"";
    el.innerHTML=list.map(i=>{
      if(v){const url="https://www.youtube.com/watch?v="+i.yt;
        return `<article class="card vid"><a class="thumb" href="${url}" target="_blank" rel="noopener noreferrer"><img loading="lazy" alt="" src="https://i.ytimg.com/vi/${i.yt}/hqdefault.jpg"><span class="play">▶</span></a>
        <h3>${esc(i.title)}</h3><p>${esc(i.desc||"")}</p>
        <div class="meta"><a class="btn btn-primary" href="${url}" target="_blank" rel="noopener noreferrer">▶ ${t("watch")}</a><span>${fmtDate(i.date)}</span>${d(i)}</div></article>`;}
      return `<article class="card plug"><div class="ic">🔌</div><h3>${esc(i.name)} ${i.ver?`<span class="tag">${esc(i.ver)}</span>`:""}</h3><p>${esc(i.desc||"")}</p>
        <div class="meta"><a class="btn btn-primary" href="${esc(i.url)}" target="_blank" rel="noopener noreferrer">${t("download")}</a><span>${fmtDate(i.date)}</span>${d(i)}</div></article>`;
    }).join("");
    el.querySelectorAll(".del").forEach(b=>b.onclick=()=>{const c=loadC();c[key]=c[key].filter(x=>x.id!==b.dataset.id);saveC(c);renderContent();toast(t("deleted"))});
  });
}

/* ===== Ekip (sadece yönetici ekler) ===== */
let teamOpen=false;
const okImg = u => typeof u==="string" && /^(data:image\/|https?:\/\/)/i.test(u);
const toDataUrl = file => new Promise(res=>{
  if(!file) return res("");
  const r=new FileReader();
  r.onload=()=>{const im=new Image();
    im.onload=()=>{const S=200,c=document.createElement("canvas");c.width=c.height=S;const m=Math.min(im.width,im.height);
      c.getContext("2d").drawImage(im,(im.width-m)/2,(im.height-m)/2,m,m,0,0,S,S);res(c.toDataURL("image/jpeg",.85))};
    im.onerror=()=>res(""); im.src=r.result};
  r.onerror=()=>res(""); r.readAsDataURL(file);
});
function renderTeam(){
  const el=$("#items-team"); if(!el) return;
  const adm=isAdmin(), list=loadC().team.slice().sort((a,b)=>a.date-b.date);
  const cards=list.map(m=>`<div class="card member"><div class="pp">${okImg(m.img)?`<img alt="" src="${esc(m.img)}">`:esc((m.name||"?")[0].toUpperCase())}</div><h3>${esc(m.name)}</h3><p>${esc(m.role||"")}</p>${adm?`<button class="del" data-id="${m.id}">${t("del")}</button>`:""}</div>`).join("");
  el.innerHTML=(cards+(adm?`<button class="card member add" id="teamPlus" title="${t("add")}">+</button>`:""))||`<div class="empty">${t("no_team")}</div>`;
  el.querySelectorAll(".del").forEach(b=>b.onclick=()=>{const c=loadC();c.team=c.team.filter(x=>x.id!==b.dataset.id);saveC(c);renderTeam();toast(t("deleted"))});
  const p=$("#teamPlus"); if(p) p.onclick=()=>{teamOpen=!teamOpen;teamForm()};
}
function teamForm(){
  const box=$("#admin-team"); if(!box) return;
  if(!isAdmin()||!teamOpen){box.innerHTML="";return}
  box.innerHTML=`<form class="card form" id="tm-form"><span class="tag hire" style="width:max-content">${t("adm")}</span>
    <input id="tm-name" required maxlength="40" placeholder="${t("tm_name")}">
    <input id="tm-role" maxlength="40" placeholder="${t("tm_role")}">
    <label class="mini">${t("tm_photo")}<input id="tm-img" type="file" accept="image/*"></label>
    <div class="row"><button class="btn btn-primary" type="submit">${t("add")}</button><button class="btn btn-ghost" type="button" id="tm-exp">${t("exp")}</button></div>
    <p class="mini">${t("exp_hint")}</p></form>`;
  $("#tm-form").onsubmit=async e=>{
    e.preventDefault();
    const img=await toDataUrl($("#tm-img").files[0]), c=loadC();
    c.team.push({id:Date.now().toString(36),name:$("#tm-name").value.trim(),role:$("#tm-role").value.trim(),img,date:Date.now()});
    saveC(c); teamOpen=false; teamForm(); renderTeam(); toast(t("added"));
  };
  $("#tm-exp").onclick=()=>{
    const blob=new Blob(["window.NOXA_CONTENT = "+JSON.stringify(loadC(),null,2)+";"],{type:"text/javascript"});
    const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="content.js"; a.click();
  };
}

/* ===== Giriş / Kayıt ===== */
function renderUser(){
  $("#loginBtn").hidden=!!user;
  $("#userBox").innerHTML=user?`<span class="user"><span class="av">${esc(user.name[0].toUpperCase())}</span>${esc(user.name)} <button class="btn btn-ghost" id="logoutBtn">${t("logout")}</button></span>`:"";
  if(user) $("#logoutBtn").onclick=()=>{user=null;localStorage.removeItem("noxa_session");refresh();toast(t("logout"))};
}
function setMode(m){
  authMode=m;
  $("#tabLogin").classList.toggle("on",m==="login");$("#tabReg").classList.toggle("on",m==="register");
  $("#aName").hidden=m==="login";$("#aName").required=m==="register";
  $("#authSubmit").textContent=m==="login"?t("login"):t("register");
}
function openModal(m){setMode(m);$("#modal").classList.add("open")}
function closeModal(){$("#modal").classList.remove("open");$("#authErr").textContent="";$("#authForm").reset()}
function startSession(u){user=u;store.set("noxa_session",u);closeModal();refresh();toast(`${t("welcome")}, ${u.name}!`)}
$("#loginBtn").onclick=()=>openModal("login");
$("#closeModal").onclick=closeModal;
$("#modal").onclick=e=>{if(e.target.id==="modal")closeModal()};
$("#tabLogin").onclick=()=>setMode("login");
$("#tabReg").onclick=()=>setMode("register");
$("#authForm").onsubmit=async e=>{
  e.preventDefault();
  const email=$("#aMail").value.trim().toLowerCase(), pass=await hash($("#aPass").value), users=store.get("noxa_users",[]);
  if(authMode==="register"){
    const name=$("#aName").value.trim();
    if(!name){$("#authErr").textContent=t("name_req");return}
    if(users.some(u=>u.email===email)){$("#authErr").textContent=t("mail_used");return}
    users.push({name,email,pass}); store.set("noxa_users",users); startSession({name,email});
  }else{
    const u=users.find(u=>u.email===email&&u.pass===pass);
    if(!u){$("#authErr").textContent=t("bad_cred");return}
    startSession({name:u.name,email:u.email});
  }
};
$("#googleBtn").onclick=()=>{
  if(!GOOGLE_CLIENT_ID){toast(t("no_gid"));return}
  const init=()=>{
    google.accounts.id.initialize({client_id:GOOGLE_CLIENT_ID,callback:r=>{
      const p=JSON.parse(decodeURIComponent(escape(atob(r.credential.split(".")[1].replace(/-/g,"+").replace(/_/g,"/")))));
      startSession({name:p.name||p.email.split("@")[0],email:p.email.toLowerCase()});
    }});
    google.accounts.id.prompt();
  };
  if(window.google&&google.accounts) return init();
  const s=document.createElement("script"); s.src="https://accounts.google.com/gsi/client"; s.onload=init; document.head.appendChild(s);
};

/* ===== İletişim (FormSubmit ile Gmail'e gider) ===== */
on("#contactForm","onsubmit",async e=>{
  e.preventDefault();
  const f=e.target, btn=f.querySelector("button"), g=n=>f.elements[n].value.trim();
  if(g("_honey")) return;
  const data={name:g("name"),email:g("email"),message:g("message"),_subject:"Noxa Studio - yeni mesaj: "+g("name"),_captcha:"false",_template:"table"};
  btn.disabled=true; btn.textContent=t("ct_sending");
  try{
    const r=await fetch("https://formsubmit.co/ajax/"+CONTACT_EMAIL,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(data)});
    const j=await r.json();
    if(!r.ok||!(j.success===true||j.success==="true")) throw new Error(j.message||"fail");
    f.reset(); toast(t("ct_ok"));
  }catch(err){
    toast(t("ct_fail"));
    location.href=`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Noxa Studio - "+data.name)}&body=${encodeURIComponent(data.message+"\n\n"+data.email)}`;
  }finally{ btn.disabled=false; btn.textContent=t("ct_send"); }
});

/* ===== Başlangıç ===== */
$("#burger").onclick=()=>$("#links").classList.toggle("open");
document.querySelectorAll("#links a").forEach(a=>a.onclick=()=>$("#links").classList.remove("open"));
applyLang();
