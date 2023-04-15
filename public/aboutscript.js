// script.js

// Function to implement parallax effect on scroll
function parallaxEffect() {
    const parallaxElement = document.querySelector('.about-us-image');
    const scrollPosition = window.pageYOffset;

    // Check if device width is greater than 800px before applying parallax effect
    if (window.innerWidth > 800) {
        // Adjust the background position based on scroll position
        parallaxElement.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
    } else {
        // Reset background position when device width is 800px or less
        parallaxElement.style.backgroundPositionY = '0';
    }
}

// Attach scroll and resize event listeners to call the parallaxEffect() function
window.addEventListener('scroll', parallaxEffect);
window.addEventListener('resize', parallaxEffect);
