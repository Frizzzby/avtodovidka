
function initBackToTop() {
  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    btn.style.display = (window.scrollY > 300) ? "block" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initModals() {
  const links = {
    "#privacy": "modal-privacy",
    "#disclaimer": "modal-disclaimer",
    "#newsletter": "modal-newsletter"
  };

  Object.entries(links).forEach(([href, modalId]) => {
    document.querySelectorAll(`a[href="${href}"]`).forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        document.getElementById(modalId).style.display = "block";
      });
    });
  });

  document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "none";
    });
  });

  window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initBackToTop();
  initModals();
});
