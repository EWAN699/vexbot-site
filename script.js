// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Modal logic
const modalBackdrops = document.querySelectorAll(".modal-backdrop");
const openButtons = document.querySelectorAll("[data-open-modal]");
const closeButtons = document.querySelectorAll("[data-close-modal]");

openButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-open-modal");
    const modal = document.getElementById(id);
    if (modal) modal.classList.add("active");
  });
});

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const backdrop = btn.closest(".modal-backdrop");
    if (backdrop) backdrop.classList.remove("active");
  });
});

modalBackdrops.forEach((backdrop) => {
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      backdrop.classList.remove("active");
    }
  });
});

// Prevent actual submit for now (placeholder)
const modalForm = document.querySelector(".modal-form");
if (modalForm) {
  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted (placeholder). Later, connect this to your backend or email.");
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
