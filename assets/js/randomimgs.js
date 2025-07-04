// random wti images
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(
    ".walking-the-internet-pictures-container"
  );
  const images = container.querySelectorAll("img.random-img");

  const randomIndex = Math.floor(Math.random() * images.length);

  images.forEach((img, index) => {
    if (index !== randomIndex) {
      img.style.display = "none";
    }
  });
});
