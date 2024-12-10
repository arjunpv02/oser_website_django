// SLIDER SCRIPT
document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.querySelectorAll('.slider-img');
    let activeIndex = 0;
    let isPaused = false;

    function slideImages() {
        if (isPaused) return;

        sliderImages[activeIndex].classList.remove('active');
        activeIndex = (activeIndex + 1) % sliderImages.length;
        sliderImages[activeIndex].classList.add('active');
    }

    function setActiveImage(index) {
        sliderImages[activeIndex].classList.remove('active');
        activeIndex = index;
        sliderImages[activeIndex].classList.add('active');
        isPaused = true; // Pause the slider
    }

    function resumeSlider(event) {
        // Check if the clicked area is NOT a slider image
        if (!event.target.closest('.slider-img')) {
            isPaused = false; // Resume automatic sliding
        }
    }

    // Add click event listeners
    sliderImages.forEach((img, index) => {
        img.addEventListener('click', () => setActiveImage(index));
    });

    // Resume slider on outside click
    document.addEventListener('click', resumeSlider);

    // Start the slider
    setInterval(slideImages, 4000);
});





// Email Submission Script
function submitEmail() {
    const email = document.getElementById("email-input").value;

    if (email) {
        alert("Thank you for subscribing with: " + email);
        document.getElementById("email-input").value = ""; // Clear the input field
    } else {
        alert("Please enter a valid email.");
    }
}

