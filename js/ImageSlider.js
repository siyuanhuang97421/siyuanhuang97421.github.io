const imageSources = ["img/SittingOnRobot.jpg", "img/coco.jpg", "img/FirstTrack.jpg"]; // Add your image sources here
let currentIndex = 0;
const slideshowImage = document.getElementById("slideshow-image");

function showNextImage() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    slideshowImage.src = imageSources[currentIndex];
}

// Automatically advance the slideshow every 3 seconds (adjust the interval as needed)
setInterval(showNextImage, 5000);