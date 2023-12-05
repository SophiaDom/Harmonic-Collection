const marqueeContent = document.getElementById('marqueeContent');
  const marqueeImage = document.querySelector('.marquee-image');

  marqueeImage.addEventListener('animationiteration', () => {
    marqueeContent.style.transition = 'none';
    marqueeContent.style.transform = 'translateX(0)';
    setTimeout(() => {
      marqueeContent.style.transition = 'transform 5s linear'; /* Adjust the duration as needed */
    }, 0);
  });