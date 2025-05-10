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
