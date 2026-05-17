// Detects when the contact form is submitted
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    
    // Prevents page from refreshing after submission
    e.preventDefault();
    
    
    // Displays thank you message
    document.getElementById("thankyou").style.display = "block";
    
    // Clears form fields after submission
    this.reset();
});