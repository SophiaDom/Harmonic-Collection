document.addEventListener("DOMContentLoaded", function () {
  const imageArray = [
    "images/boat.jpg",
    "images/cityscape.jpg",
    "images/inland.jpg",
    "images/littleisland.jpg",
    "images/pathway.jpg",
    "images/statueliberty.jpg",
    "images/vine.jpg",
    "images/water.jpg",
    "images/woodspike.jpg",
  ];

  function getRandomImage() {
    return imageArray[Math.floor(Math.random() * imageArray.length)];
  }

  function displayRandomImage() {
    const image = document.createElement("img");
    image.src = getRandomImage();
    
    image.classList.add('active');
    
    const activeImages = document.querySelectorAll('.active');
    activeImages.forEach(activeImage => {
      activeImage.classList.remove('active');
    });

    document.body.appendChild(image);
    
    void image.offsetWidth;
  }

  displayRandomImage();

  setInterval(displayRandomImage, 3000);
});