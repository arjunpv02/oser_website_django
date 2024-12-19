// Function to handle email submission
function submitEmail() {
    // Get the email input value
    var e = document.getElementById("email-input").value;
    
    // If an email is entered, thank the user and clear the input
    e ? (
      alert("Thank you for subscribing with: " + e),  // Display thank you message with email
      document.getElementById("email-input").value = ""  // Clear the email input field
    ) : 
    // If no email is entered, prompt the user to enter a valid email
    alert("Please enter a valid email.");
  }
  
  // Event listener for DOMContentLoaded (fires when the HTML has been fully loaded)
  document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class 'slider-img' (presumably images in a slider)
    const i = document.querySelectorAll(".slider-img");
    
    // Initialize variables
    let n = 0;  // Current index of the active image
    let a = !1;  // Flag to prevent automatic sliding while interacting
    
    // Loop through each image and add a click event listener
    i.forEach((e, t) => {
      e.addEventListener("click", () => 
        // When an image is clicked, change the active image
        function (e) {
          // Remove 'active' class from the previously active image
          i[n].classList.remove("active");
          // Set the new active image
          n = e;
          i[n].classList.add("active");
          // Set flag to prevent automatic sliding
          a = !0;
        }(t));
    });
  
    // Add an event listener to detect clicks outside the slider images
    // document.addEventListener("click", function (e) {
    //   // If the click is not on a slider image, reset the flag to allow automatic sliding again
    //   e.target.closest(".slider-img") || (a = !1);
    // });
  
    // Set an interval to automatically change the active image every 4 seconds (if no interaction)
    // setInterval(function () {
    //   if (!a) {  // Only change the image if no user interaction occurred
    //     // Remove 'active' class from the current image
    //     i[n].classList.remove("active");
    //     // Update the index to the next image (looping back to the first image after the last one)
    //     n = (n + 1) % i.length;
    //     // Add 'active' class to the new image
    //     i[n].classList.add("active");
    //   }
    // }, 4000);  // 4000 milliseconds = 4 seconds
  });
  