document.addEventListener("DOMContentLoaded", function() {
    const slideshow = document.querySelector('.slideshow');
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    // Define image paths for desktop and mobile
    const desktopImages = ['bettercallsaul.jpg', 'whiplash.jpeg', 'deadpool_wolverine.jpg', 'f4.jpg']; // Add more images as needed
    const mobileImages = ['joker.jpg', 'us.jpg', 'f4.jpg']; // Add more images as needed
    
    const imageFolder = isMobile ? 'images/mobile/' : 'images/desktop/';
    const imageList = isMobile ? mobileImages : desktopImages;

    // Clear any existing slides to prevent duplication
    slideshow.innerHTML = '';

    // Load images into the slideshow
    imageList.forEach(image => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage = `url('${imageFolder}${image}')`;
        slideshow.appendChild(slide);
    });

    
    // JavaScript for slideshow transitions
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 5000);
    slides[currentSlide].classList.add('active');
});
