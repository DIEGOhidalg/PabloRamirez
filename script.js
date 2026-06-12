const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const wasOpen = item.classList.contains("is-open");

    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("is-open");
    });

    if (!wasOpen) {
      item.classList.add("is-open");
    }
  });
});

const form = document.querySelector("#lead-form");
const status = document.querySelector("#form-status");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = "Por favor completa los campos obligatorios para enviar tu caso.";
      form.reportValidity();
      return;
    }

    status.textContent = "Gracias por contactarnos. Te llevaremos a la página de confirmación.";
    form.reset();
    window.location.href = "gracias.html";
  });
}
