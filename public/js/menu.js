document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("navLinks");
    const navLinks = document.querySelectorAll("#navLinks a");
  
    // Открытие/закрытие меню по бургеру
    burger.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  
    // Закрытие меню при клике на любую ссылку
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
      });
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 600) {
    document.querySelectorAll('.course-card').forEach(card => {
      card.addEventListener('click', function () {
        this.classList.toggle('flipped');
      });
    });
  }
});
 
(function () {
  let previousScrollY = 0;
  const headerEl = document.querySelector('.site-header'); // ← добавил точку перед class

  if (!headerEl) return;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 30) {
      // вверху страницы — шапка всегда видна
      headerEl.classList.remove('header--hidden');
      previousScrollY = 0;
      return;
    }

    if (currentScrollY > previousScrollY) {
      // скролл вниз — скрываем хэдер
      headerEl.classList.add('header--hidden');
    } else {
      // скролл вверх — показываем
      headerEl.classList.remove('header--hidden');
    }

    previousScrollY = currentScrollY;
  });
})();

