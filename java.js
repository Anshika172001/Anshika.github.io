// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });
    
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    }
});
