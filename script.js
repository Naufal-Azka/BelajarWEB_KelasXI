const lightboxContainer = document.createElement("div");
lightboxContainer.id = "lightbox";
lightboxContainer.className = "lightbox";
document.body.appendChild(lightboxContainer);

let currentSlideIndex = 0;
let images = [];




function openLightbox(index) {
    // Get all images from the gallery container
    images = document.querySelectorAll('.gallery-container .photo-item img');

    // Create lightbox content dynamically based on images
    const lightboxContent = document.createElement("div");
    lightboxContent.className = "lightbox-content";

    let htmlContent = "";

    // Create slides for each image
    // lightboxContent.innerHTML = Array.from(images).map((img, i) => `
    //     <div class="mySlides" style="display: ${i === index ? 'block' : 'none'};">
    //         <img src="${img.src}" class="lightbox-img">
    //     </div>
    // `).join("");

    // for (let i = 0; i < images.length; i++) {
    //     htmlContent += `
    //     <div class="mySlides" style="display: ${i === index ? 'block' : 'none'};">
    //         <img src="${images[i].src}" class="lightbox-img">
    //     </div>
    // `;
    // }

    // Array.from(images).forEach((img, i) => {
    //     htmlContent += `
    //         <div class="mySlides" style="display: ${i === index ? 'block' : 'none'};">
    //             <img src="${img.src}" class="lightbox-img">
    //         </div>
    //     `;
    // });

    // Array.from(images).forEach(function(img, i){
    //     htmlContent += `
    //     <div class="mySlides" style="display: ${i === index ? 'block' : 'none'};">
    //         <img src="${img.src}" class="lightbox-img">
    //     </div>
    // `;
    // });

    images.forEach(function(img, i){
        htmlContent += `
        <div class="mySlides" style="display: ${i === index ? 'block' : 'none'};">
            <img src="${img.src}" class="lightbox-img">
        </div>
         `;
    });

    lightboxContent.innerHTML = htmlContent;

    // Add navigation buttons
    lightboxContent.innerHTML += `
        <span class="close cursor" onclick="closeLightbox()">&times;</span>
        <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
        <a class="next" onclick="changeSlide(1)">&#10095;</a>
    `;

    // Clear previous lightbox content and add the new one
    lightboxContainer.innerHTML = '';
    lightboxContainer.appendChild(lightboxContent);
    lightboxContainer.style.display = "flex"; // Show lightbox

    currentSlideIndex = index;
}

document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to gallery images
    document.querySelectorAll('.gallery-container .photo-item img').forEach((img, index) => {
        img.addEventListener('click', () => {
            openLightbox(index); // Open lightbox and show the correct slide
        });
    });
});

function closeLightbox() {
    lightboxContainer.style.display = "none";
}

function changeSlide(n) {
    currentSlideIndex += n;

    if (currentSlideIndex >= images.length) {
        currentSlideIndex = 0; // Loop back to start
    }
    if (currentSlideIndex < 0) {
        currentSlideIndex = images.length - 1; // Loop back to end
    }

    const slides = lightboxContainer.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }

    slides[currentSlideIndex].style.display = "block"; // Show current slide
}
