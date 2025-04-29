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
  
    // Назначаем картинку каждой карточке по порядку
    document.querySelectorAll(".course-card-front").forEach((card, index) => {
      const img = images[index % images.length]; // на всякий случай, если карточек больше, чем картинок
      card.style.background = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${img}') center/cover no-repeat`;
      card.style.color = "white";
    });
  });
