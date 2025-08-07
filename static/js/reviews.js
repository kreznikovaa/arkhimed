document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".reviews-track");
  const reviews = document.querySelectorAll(".review");
  const prevBtn = document.querySelector(".review-prev");
  const nextBtn = document.querySelector(".review-next");

  let currentIndex = 0;

  function showReview(index) {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  });

  showReview(currentIndex);
});
