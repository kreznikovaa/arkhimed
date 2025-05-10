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

document.addEventListener("DOMContentLoaded", () => {
    const path = "/images/cards/";
  
    // Заранее определённый список картинок
    const images = [
      `${path}1.png`,
      `${path}2.png`,
      `${path}3.png`,
      `${path}4.png`,
      `${path}5.png`,
      `${path}6.png`,
      `${path}7.png`,
      `${path}8.png`,
    ];
  
    // Назначаем картинку каждой карточке
    document.querySelectorAll(".course-card").forEach((card, index) => {
      const img = images[index % images.length];
      
      const front = card.querySelector(".course-card-front");
      const back = card.querySelector(".course-card-back");
  
      if (front) {
        front.style.background = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${img}') center/cover no-repeat`;
        front.style.color = "white";
      }
  
      if (back) {
        back.style.background = `url('${img}') center/cover no-repeat`;
        back.style.color = "white"; // можно поменять, если нужно контраст
      }
    });
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
