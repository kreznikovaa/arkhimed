document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".teachers-gallery");
    const scrollLeft = document.querySelector(".scroll-left");
    const scrollRight = document.querySelector(".scroll-right");

    scrollLeft.addEventListener("click", function () {
        gallery.scrollBy({ left: -300, behavior: "smooth" });
    });

    scrollRight.addEventListener("click", function () {
        gallery.scrollBy({ left: 300, behavior: "smooth" });
    });
});
