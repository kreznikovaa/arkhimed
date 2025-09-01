// document.addEventListener("DOMContentLoaded", () => {
//     const path = "/images/cards/";
  
//     // Заранее определённый список картинок
//     const images = [
//       `${path}1.png`,
//       `${path}2.png`,
//       `${path}3.png`,
//       `${path}4.png`,
//       `${path}5.png`,
//       `${path}6.png`,
//       `${path}7.png`,
//       `${path}8.png`,
//     ];
  
//     // Назначаем картинку каждой карточке
//     document.querySelectorAll(".course-card").forEach((card, index) => {
//       const img = images[index % images.length];
      
//       const front = card.querySelector(".course-card-front");
//       const back = card.querySelector(".course-card-back");
  
//       if (front) {
//         front.style.background = `url('${img}') center/cover no-repeat`;
//         front.style.color = "white";
//       }
  
//       if (back) {
//         back.style.background = `url('${img}') center/cover no-repeat`;
//         back.style.color = "white"; // можно поменять, если нужно контраст
//       }
//     });
//   });



(function () {
  function setMaxHeight(panel, open) {
    if (open) {
      panel.style.maxHeight = 'none';
      const h = panel.scrollHeight;
      panel.style.maxHeight = '0px';
      requestAnimationFrame(() => panel.style.maxHeight = h + 'px');
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      requestAnimationFrame(() => panel.style.maxHeight = '0px');
    }
  }

  document.querySelectorAll('.course-card').forEach(card => {
    const expand = card.querySelector('.expand-toggle');
    const collapse = card.querySelector('.collapse-toggle');
    const back = card.querySelector('.course-card-back');

    back.style.maxHeight = '0px';
    back.setAttribute('aria-hidden', 'true');

    function open() {
      card.classList.add('is-open');
      back.setAttribute('aria-hidden', 'false');
      setMaxHeight(back, true);
    }
    function close() {
      card.classList.remove('is-open');
      back.setAttribute('aria-hidden', 'true');
      setMaxHeight(back, false);
    }

    expand.addEventListener('click', open);
    collapse.addEventListener('click', close);

    window.addEventListener('resize', () => {
      if (card.classList.contains('is-open')) {
        back.style.maxHeight = 'none';
        back.style.maxHeight = back.scrollHeight + 'px';
      }
    });
  });
})();



