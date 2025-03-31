function initHomeLink() {
  const homeLink = document.querySelector('.home-link');
  if (homeLink) {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'index.html' || currentPage === '' || currentPage === '/') {
      homeLink.style.display = 'none';
    } else {
      homeLink.style.display = 'block';
    }
  }
}
function initScrollHeader() {
  const header = document.querySelector('.header');
  const scrollThreshold = 50; // порог прокрутки для добавления тени
  if(header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}
function initScrollAnimations() {
  const animateSections = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('animated');
      }
    });
  };
  animateSections();
  window.addEventListener('scroll', animateSections);
}
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded');
  initHomeLink();
  initScrollHeader(); // добавляем инициализацию эффекта для хедера
  initScrollAnimations();
});

// Переключение мобильного меню
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const menu = document.querySelector(".mobile-menu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      menu.classList.toggle("active");
    });

    // При клике по ссылке — закрываем меню
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  }
});


// Удаляем старую шапку на мобильных устройствах
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 1024) {
    const oldHeader = document.querySelector("header.header");
    if (oldHeader) {
      oldHeader.remove();
    }
  }
})