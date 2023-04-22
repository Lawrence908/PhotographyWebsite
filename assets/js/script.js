const thumbnails = document.querySelectorAll('.thumbnail');
const fullImage = document.querySelector('.full-image');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const thumbnailSrc = thumbnail.querySelector('img').src;
    const fullSrc = thumbnailSrc.replace('-thumb', '');
    fullImage.src = fullSrc;

    thumbnails.forEach(thumb => {
      thumb.classList.remove('active');
    });

    thumbnail.classList.add('active');
  });

  thumbnail.addEventListener('mouseover', () => {
    const thumbnailSrc = thumbnail.querySelector('img').src;
    const fullSrc = thumbnailSrc.replace('-thumb', '');
    fullImage.src = fullSrc;
  });

  thumbnail.addEventListener('mouseleave', () => {
    fullImage.src = '';
  });
});