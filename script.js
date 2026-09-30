document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTLER
    ========================================= */

    const uploadModal = document.getElementById("uploadModal");
    const searchModal = document.getElementById("searchModal");

    const openUpload = document.getElementById("openUpload");
    const heroUpload = document.getElementById("heroUpload");
    const ctaUpload = document.getElementById("ctaUpload");

    const closeUpload = document.getElementById("closeUpload");

    const openSearch = document.getElementById("openSearch");
    const closeSearch = document.getElementById("closeSearch");

    const uploadForm = document.getElementById("uploadForm");

    const contentGrid = document.getElementById("contentGrid");

    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    const filterTabs = document.querySelectorAll(".filter-tab");


    /* =========================================
       MODAL AÇMA
    ========================================= */

    function showModal(modal) {

        if (!modal) return;

        modal.classList.add("open");

        document.body.style.overflow = "hidden";
    }


    /* =========================================
       MODAL KAPATMA
    ========================================= */

    function hideModal(modal) {

        if (!modal) return;

        modal.classList.remove("open");

        document.body.style.overflow = "";
    }


    /* =========================================
       UPLOAD MODAL
    ========================================= */

    if (openUpload) {
        openUpload.addEventListener("click", () => {
            showModal(uploadModal);
        });
    }


    if (heroUpload) {
        heroUpload.addEventListener("click", () => {
            showModal(uploadModal);
        });
    }


    if (ctaUpload) {
        ctaUpload.addEventListener("click", () => {
            showModal(uploadModal);
        });
    }


    if (closeUpload) {
        closeUpload.addEventListener("click", () => {
            hideModal(uploadModal);
        });
    }


    /* =========================================
       SEARCH MODAL
    ========================================= */

    if (openSearch) {

        openSearch.addEventListener("click", () => {

            showModal(searchModal);

            setTimeout(() => {
                searchInput.focus();
            }, 200);

        });

    }


    if (closeSearch) {

        closeSearch.addEventListener("click", () => {
            hideModal(searchModal);
        });

    }


    /* =========================================
       DIŞARI TIKLAYINCA MODAL KAPAT
    ========================================= */

    [uploadModal, searchModal].forEach(modal => {

        if (!modal) return;

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                hideModal(modal);
            }

        });

    });


    /* =========================================
       ESC TUŞU
    ========================================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            hideModal(uploadModal);
            hideModal(searchModal);

        }


        /* CTRL + K */

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            showModal(searchModal);

            setTimeout(() => {
                searchInput.focus();
            }, 200);

        }

    });


    /* =========================================
       KATEGORİ FİLTRELEME
    ========================================= */

    filterTabs.forEach(tab => {

        tab.addEventListener("click", () => {

            filterTabs.forEach(item => {
                item.classList.remove("active");
            });

            tab.classList.add("active");

            const filter = tab.dataset.filter;

            const cards =
                document.querySelectorAll(".content-card");


            cards.forEach(card => {

                const category =
                    card.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.style.display = "";

                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "";
                    }, 20);

                } else {

                    card.style.opacity = "0";
                    card.style.transform = "scale(0.96)";

                    setTimeout(() => {
                        card.style.display = "none";
                    }, 180);

                }

            });

        });

    });


    /* =========================================
       SEARCH SİSTEMİ
    ========================================= */

    function searchContent(query) {

        const cards =
            document.querySelectorAll(".content-card");

        const cleanQuery =
            query.toLowerCase().trim();


        if (!cleanQuery) {

            searchResults.innerHTML = `
                <div class="search-empty">
                    Aramak istediğin içeriği yaz.
                </div>
            `;

            return;
        }


        const results = [];


        cards.forEach(card => {

            const title =
                card.querySelector("h3")?.textContent || "";

            const description =
                card.querySelector(".card-description")?.textContent || "";

            const category =
                card.dataset.category || "";


            const searchableText =
                `${title} ${description} ${category}`.toLowerCase();


            if (searchableText.includes(cleanQuery)) {

                results.push({
                    title,
                    description,
                    category
                });

            }

        });


        if (results.length === 0) {

            searchResults.innerHTML = `
                <div class="search-empty">
                    "${escapeHTML(query)}" için sonuç bulunamadı.
                </div>
            `;

            return;
        }


        searchResults.innerHTML =
            results.map(result => `

                <div class="search-result">

                    <div class="search-result-image"></div>

                    <div>

                        <strong>
                            ${escapeHTML(result.title)}
                        </strong>

                        <span>
                            ${escapeHTML(
                                result.category.toUpperCase()
                            )}
                            ·
                            ${escapeHTML(result.description)}
                        </span>

                    </div>

                </div>

            `).join("");

    }


    if (searchInput) {

        searchInput.addEventListener("input", () => {

            searchContent(searchInput.value);

        });

    }


    /* =========================================
       HTML GÜVENLİĞİ
    ========================================= */

    function escapeHTML(value) {

        return value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =========================================
       İÇERİK PAYLAŞMA
    ========================================= */

    if (uploadForm) {

        uploadForm.addEventListener("submit", event => {

            event.preventDefault();


            const title =
                document.getElementById("contentTitle").value.trim();

            const category =
                document.getElementById("contentCategory").value;

            const description =
                document
                    .getElementById("contentDescription")
                    .value
                    .trim();

            const file =
                document.getElementById("contentFile").files[0];


            if (!title || !category || !description) {

                alert("Lütfen tüm alanları doldur.");

                return;
            }


            /* Yeni kart */

            const card =
                document.createElement("article");


            card.className = "content-card";

            card.dataset.category = category;


            let categoryName = "İÇERİK";


            if (category === "animation") {
                categoryName = "ANIMATION";
            }

            if (category === "script") {
                categoryName = "SCRIPT";
            }

            if (category === "model") {
                categoryName = "MODEL";
            }

            if (category === "ui") {
                categoryName = "UI";
            }


            card.innerHTML = `

                <div class="card-preview preview-purple">

                    <div class="card-preview-grid"></div>

                    <div class="mini-character">

                        <div class="mini-head"></div>

                        <div class="mini-body"></div>

                        <div class="mini-arm left"></div>

                        <div class="mini-arm right"></div>

                        <div class="mini-leg left"></div>

                        <div class="mini-leg right"></div>

                    </div>

                    <div class="card-type">
                        ${categoryName}
                    </div>

                    <button class="card-play">
                        ▶
                    </button>

                </div>


                <div class="card-content">

                    <div class="card-title-row">

                        <h3>
                            ${escapeHTML(title)}
                        </h3>

                        <button class="more-button">
                            •••
                        </button>

                    </div>


                    <p class="card-description">
                        ${escapeHTML(description)}
                    </p>


                    <div class="card-author">

                        <div class="author-avatar">
                            NX
                        </div>

                        <div class="author-info">

                            <strong>
                                NoxaUser
                            </strong>

                            <span>
                                şimdi
                            </span>

                        </div>

                    </div>


                    <div class="card-footer">

                        <div class="card-stats">

                            <span>
                                ♡ 0
                            </span>

                            <span>
                                ↓ 0
                            </span>

                        </div>

                        <span class="card-version">
                            NOXA
                        </span>

                    </div>

                </div>

            `;


            contentGrid.prepend(card);


            /* Formu temizle */

            uploadForm.reset();


            /* Modal kapat */

            hideModal(uploadModal);


            /* Kullanıcıya bilgi */

            showNotification(
                "İçeriğin başarıyla paylaşıldı!"
            );

        });

    }


    /* =========================================
       BİLDİRİM
    ========================================= */

    function showNotification(message) {

        const notification =
            document.createElement("div");


        notification.style.position = "fixed";
        notification.style.bottom = "25px";
        notification.style.right = "25px";

        notification.style.zIndex = "1000";

        notification.style.padding =
            "13px 17px";

        notification.style.border =
            "1px solid rgba(139,92,246,0.3)";

        notification.style.borderRadius =
            "10px";

        notification.style.background =
            "#15121d";

        notification.style.color =
            "#d8d0e6";

        notification.style.fontSize =
            "11px";

        notification.style.boxShadow =
            "0 15px 40px rgba(0,0,0,0.4)";

        notification.textContent =
            message;


        document.body.appendChild(notification);


        setTimeout(() => {

            notification.style.opacity = "0";
            notification.style.transform =
                "translateY(10px)";

            notification.style.transition =
                "0.25s ease";


            setTimeout(() => {
                notification.remove();
            }, 250);

        }, 2500);

    }


    /* =========================================
       NAVBAR SCROLL
    ========================================= */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            navbar.style.background =
                "rgba(8,7,11,0.92)";

        } else {

            navbar.style.background =
                "rgba(8,7,11,0.72)";

        }

    });


    /* =========================================
       KART HOVER
    ========================================= */

    document
        .querySelectorAll(".content-card")
        .forEach(card => {

            card.addEventListener(
                "mouseenter",
                () => {

                    card.style.zIndex = "2";

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.zIndex = "";

                }
            );

        });


    /* =========================================
       ANİMASYON ÖNİZLEME
    ========================================= */

    const character =
        document.querySelector(".character-preview");


    if (character) {

        let angle = 0;


        setInterval(() => {

            angle += 0.7;

            const x =
                Math.sin(angle * 0.04) * 7;

            character.style.transform =
                `translate(calc(-50% + ${x}px), -50%)`;

        }, 30);

    }


    /* =========================================
       SAYFA YÜKLENDİ
    ========================================= */

    console.log(
        "%cNoxa Studio",
        "color:#9b72ff;font-size:24px;font-weight:bold"
    );

    console.log(
        "Noxa Studio başarıyla başlatıldı."
    );

});