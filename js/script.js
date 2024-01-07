!(function () {
  "use strict";
  if (document.getElementById("text-circle-1")) {
    new CircleType(document.getElementById("text-circle-1")).radius(0).dir(1),
      document
        .getElementById("text-circle-1")
        .classList.add("ani-long", "ani-rotate");
  }
  const e = document.querySelector(".scrollToTopBtn");
  e &&
    e.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  const t = document.querySelector(".rdn_nav");
  if (t) {
    const e = t.cloneNode(!0);
    document.querySelector(".cloned_nav").appendChild(e);
  }
  const o = document.querySelector(".cloned");
  if (
    ((window.onscroll = function () {
      e &&
        (document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
          ? (e.style.opacity = "1")
          : (e.style.opacity = "0")),
        o &&
          (document.body.scrollTop > 500 ||
          document.documentElement.scrollTop > 500
            ? o.classList.add("fixed_menu")
            : o.classList.remove("fixed_menu"));
    }),
    document.querySelector(".nav_header "))
  ) {
    const e = document
      .querySelector(".nav_header")
      .querySelectorAll(".has_child");
    for (var n = 0; n < e.length; n++)
      e[n].addEventListener("mouseenter", function () {
        this.classList.add("active");
      }),
        e[n].addEventListener("mouseleave", function () {
          this.classList.remove("active");
        });
  }
  if (
    (document.addEventListener("DOMContentLoaded", function () {
      var e = document.getElementById("mobilemenu"),
        t = new bootstrap.Offcanvas(e);
      document.querySelectorAll(".mobile_menu_btn").forEach((e) => {
        e.addEventListener("click", function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle();
        });
      });
    }),
    document.querySelector(".mobile_menu"))
  ) {
    const e = document
      .querySelector(".mobile_menu")
      .querySelectorAll(".mdropdown");
    for (let t = 0; t < e.length; t++) {
      const o = '<i class="mbtn_drop fa fa-angle-down"></i>';
      e[t].insertAdjacentHTML("beforeend", o);
    }
    const t = document
      .querySelector(".mobile_menu")
      .querySelectorAll(".mdropdown > i");
    for (var r = 0; r < t.length; r++)
      t[r].addEventListener("click", function (e) {
        this.parentNode.classList.toggle("active"),
          slideToggle(this.parentNode.querySelector(".mdropdown_child"), 200),
          e.preventDefault();
      });
  }
  GLightbox({
    touchNavigation: !0,
    loop: !0,
    autoplayVideos: !0,
    selector: ".popup_video",
    zoomable: !1,
    height: "auto",
    draggable: !1,
  }),
    GLightbox({
      touchNavigation: !0,
      loop: !0,
      selector: ".popup_img",
      zoomable: !1,
      height: "auto",
      draggable: !1,
    }),
    new Swiper(".event_one_slider", {
      speed: 800,
      loop: !0,
      spaceBetween: 32,
      slidesPerView: 1,
      centeredSlides: !1,
      autoplay: { delay: 6e3, disableOnInteraction: !1 },
      breakpoints: {
        767: { slidesPerView: 2, centeredSlides: !1 },
        991: { slidesPerView: 3, centeredSlides: !0 },
      },
      navigation: {
        nextEl: ".event_one_nav .next",
        prevEl: ".event_one_nav .prev",
      },
    }),
    new Swiper(".event_two_slider", {
      speed: 800,
      loop: !0,
      spaceBetween: 32,
      slidesPerView: 1,
      centeredSlides: !1,
      simulateTouch: !1,
      autoplay: { delay: 6e3, disableOnInteraction: !1 },
      breakpoints: {
        767: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    }),
    new Swiper(".routes_slider", {
      speed: 800,
      loop: !0,
      spaceBetween: 32,
      slidesPerView: 1,
      centeredSlides: !1,
      simulateTouch: !0,
      autoplay: { delay: 8e3, disableOnInteraction: !1 },
      breakpoints: { 767: { slidesPerView: 2 } },
      navigation: { nextEl: ".routes_nav .next", prevEl: ".routes_nav .prev" },
    }),
    new Swiper(".testi_slide", {
      speed: 800,
      loop: !1,
      spaceBetween: 32,
      slidesPerView: 1,
      autoplay: { delay: 12e3, disableOnInteraction: !1 },
      breakpoints: { 767: { slidesPerView: 2 }, 991: { slidesPerView: 3 } },
      pagination: { el: ".testi_pagination" },
    }),
    new Swiper(".event_gallery_slider", {
      speed: 800,
      loop: !1,
      spaceBetween: 32,
      slidesPerView: 1,
      centeredSlides: !0,
      autoplay: { delay: 12e3, disableOnInteraction: !1 },
      breakpoints: { 767: { slidesPerView: 2 }, 991: { slidesPerView: 3 } },
      pagination: { el: ".testi_pagination" },
    });
  const i = document.querySelector(".typing-one");
  if (i) {
    const e = document
        .querySelector(".typing-words")
        .getAttribute("data-words")
        .split("|"),
      t = new Typewriter(i, { loop: !0, delay: 75 });
    for (let o = 0; o < e.length; o++) {
      const n = e[o];
      t.typeString(n).pauseFor(2500).deleteAll();
    }
    t.start();
  }
  scrollCue.init();
  document.querySelectorAll(".stats_row").forEach(function (e) {
    var t = new IntersectionObserver(
      function (e) {
        e[0].isIntersecting &&
          (rdn_counter(".counter_text", 20), t.unobserve(e[0].target));
      },
      { once: !0 }
    );
    t.observe(e);
  });
  new Plyr(document.getElementById("player"));
  const l = document.querySelector(".events_body"),
    s = document.querySelector(".event_filter");
  if (l) {
    const e = new Isotope(l, {
      itemSelector: ".event_outer",
      layoutMode: "masonry",
    });
    setTimeout(() => {
      e.arrange();
    }, 300),
      s &&
        s.addEventListener("click", function (t) {
          if (!matchesSelector(t.target, "a")) return;
          const o = t.target.getAttribute("data-filter");
          e.arrange({ filter: o }),
            s.querySelector(".active").classList.remove("active"),
            t.target.classList.add("active"),
            t.preventDefault();
        });
  }
})();
