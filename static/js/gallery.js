document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        basicLightbox.create(`<img src="${img.src}" alt="" style="max-width: 90vw; max-height: 90vh;">`).show()
    });
});
