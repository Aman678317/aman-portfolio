/*=============== HEADER SHADOW ===============*/
const header = document.getElementById("header");

function scrollHeader() {
  if (window.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader, { passive: true });
scrollHeader();

/*=============== ACTIVE NAV LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__menu a[href^='#']");

function scrollActive() {
  const scrollY = window.pageYOffset;
  let currentId = "home";

  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 160) currentId = section.id;
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active-link", link.getAttribute("href") === "#" + currentId);
  });
}

let navTicking = false;
window.addEventListener(
  "scroll",
  () => {
    if (navTicking) return;
    navTicking = true;
    requestAnimationFrame(() => {
      scrollActive();
      navTicking = false;
    });
  },
  { passive: true }
);
scrollActive();

/*=============== THEME ===============*/
const themeButton = document.getElementById("theme-button");
const themeIcon = themeButton.querySelector("i");
const lightTheme = "light-theme";

function syncThemeButton() {
  const isLight = document.documentElement.classList.contains(lightTheme);
  themeIcon.className = isLight ? "bx bx-sun" : "bx bx-moon";
  themeButton.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
}

syncThemeButton();

themeButton.addEventListener("click", () => {
  const isLight = document.documentElement.classList.toggle(lightTheme);
  syncThemeButton();
  try {
    localStorage.setItem("selected-theme", isLight ? "light" : "dark");
  } catch (e) {}
});

/*=============== SERVICES MODAL ===============*/
const modals = document.querySelectorAll(".services__modal");
const modalOpeners = document.querySelectorAll(".services__button");
let lastFocused = null;

function openModal(index, trigger) {
  const modal = modals[index];
  if (!modal) return;
  lastFocused = trigger || document.activeElement;
  modal.classList.add("active-modal");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const close = modal.querySelector(".services__modal-close");
  if (close) close.focus();
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("active-modal");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocused) lastFocused.focus();
}

modalOpeners.forEach((button, index) => {
  button.addEventListener("click", () => openModal(index, button));
});

modals.forEach((modal) => {
  modal.querySelectorAll(".services__modal-close").forEach((button) => {
    button.addEventListener("click", () => closeModal(modal));
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal(modal);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const open = document.querySelector(".services__modal.active-modal");
  if (open) closeModal(open);
});

/*=============== WORK FILTER ===============*/
const mixer = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

const workLinks = document.querySelectorAll(".work__item");

function activeWork(selected) {
  workLinks.forEach((link) => {
    const isSelected = link === selected;
    link.classList.toggle("active-work", isSelected);
    link.setAttribute("aria-pressed", String(isSelected));
  });
}

workLinks.forEach((link) => {
  link.addEventListener("click", () => activeWork(link));
});

/*=============== DOCUMENT SWIPER ===============*/
const testimonialSwiper = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  grabCursor: true,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  const subject = encodeURIComponent("Portfolio enquiry from " + name);
  const body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
  const mailto = "mailto:shandilyaprahaald@gmail.com?subject=" + subject + "&body=" + body;

  if (formStatus) formStatus.textContent = "Opening your email app with the message filled in…";
  window.location.href = mailto;
});

/*=============== SCROLL REVEAL ===============*/
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });

  sr.reveal(".nav__menu", {
    delay: 100,
    scale: 0.1,
    origin: "bottom",
    distance: "300px",
  });

  sr.reveal(".home__data");
  sr.reveal(".home__handle", { delay: 100 });
  sr.reveal(".home__social, .home__scroll", {
    delay: 100,
    origin: "bottom",
  });

  sr.reveal(".about__img", {
    delay: 100,
    origin: "left",
    scale: 0.9,
    distance: "30px",
  });

  sr.reveal(".about__data", {
    delay: 100,
    scale: 0.9,
    origin: "right",
    distance: "30px",
  });

  sr.reveal(".skills__content", {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });

  sr.reveal(".services__card", {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });

  sr.reveal(".work__card", {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });

  sr.reveal(".testimonial__container", {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });

  sr.reveal(".contact__info, .contact__title-info", {
    delay: 100,
    scale: 0.9,
    origin: "left",
    distance: "30px",
  });

  sr.reveal(".contact__form, .contact__title-form", {
    delay: 100,
    scale: 0.9,
    origin: "right",
    distance: "30px",
  });

  sr.reveal(".footer__container", {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });
}
