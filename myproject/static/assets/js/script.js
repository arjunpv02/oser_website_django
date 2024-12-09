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


/*
$(document).on('submit', '#subscribe', function (e) {
    e.preventDefault(); // Prevent form submission/reload
    
    const email = $('#email').val();
    const csrfToken = $('input[name=csrfmiddlewaretoken]').val();

    if (!email) {
        // If email is empty, show an error message
        $("#message").html("<span style='color: red;'>Please enter a valid email address.</span>");
        return;
    }

    // Perform AJAX POST request
    $.ajax({
        type: 'POST',
        url: '/subscribe',
        data: {
            email: email,
            csrfmiddlewaretoken: csrfToken
        },
        success: function (response) {
            // Show the response message from the server
            $("#message").html(`<span style='color: green;'>${response}</span>`);
        },
        error: function (xhr, status, error) {
            // Handle errors
            $("#message").html("<span style='color: red;'>An error occurred. Please try again later.</span>");
        }
    });
});


//AJAX EMAIL Form Submission Script
/*$(document).on('submit', '#subscribe', function (e) {
        e.preventDefault(); // Prevent form submission/reload
        $.ajax({
            type: 'POST',
            url: '/subscribe',
            data: { 
                email: $('#email').val(),
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            
            },
            success: function (data) {
            $("message").html(data)
            }
        });
});*/




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

/*
(function ($) {
    "use strict";

    // Testimonials carousel
    $(".features .testimonial-carousel").owlCarousel({
        autoplay: true,            // Enable autoplay
        smartSpeed: 1000,          // Speed of transitions
        center: true,              // Center-align items
        margin: 24,                // Margin between items
        dots: true,                // Enable dots navigation
        loop: true,                // Enable infinite loop
        nav: false,                // Disable next/prev navigation
        responsive: {              // Responsive settings
            0: {
                items: 1           // 1 item for small screens
            },
            768: {
                items: 2           // 2 items for medium screens
            },
            992: {
                items: 3           // 3 items for large screens
            }
        }
    });

})(jQuery);
*/