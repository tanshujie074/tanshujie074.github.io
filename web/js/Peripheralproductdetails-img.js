const thumbnails = document.querySelectorAll('.thumbnail');

const mainImage = document.getElementById('main-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        mainImage.src = this.getAttribute('data-full-image');
    });
});


