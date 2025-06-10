document.addEventListener("DOMContentLoaded", function () {
    const quotes = document.querySelectorAll(".quote");
    let currentIndex = 0;

    function showNextQuote() {
        quotes.forEach((quote, index) => {
            quote.style.display = index === currentIndex ? "block" : "none";
        });

        currentIndex = (currentIndex + 1) % quotes.length; // Loop through quotes
    }

    setInterval(showNextQuote, 5000); // Change quote every 5 seconds
    showNextQuote(); // Show first quote initially
});

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// Ensure dropdown opens smoothly
document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.addEventListener("mouseover", function () {
        this.querySelector(".dropdown-menu").style.display = "block";
    });

    dropdown.addEventListener("mouseout", function () {
        this.querySelector(".dropdown-menu").style.display = "none";
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const contacts = [
        "Email: <a href='mailto:Akolpatricia07@gmail.com'>Akolpatricia07@gmail.com</a>",
        "Phone: +256 786 623449",
        "Social: <a href='https://linkedin.com/'>LinkedIn</a>",
        "GitHub: <a href='https://github.com/'>GitHub</a>"
    ];
    
    let currentIndex = 0;
    const contactElement = document.querySelector(".left-side h3 + p");

    function rotateContact() {
        contactElement.innerHTML = contacts[currentIndex];
        currentIndex = (currentIndex + 1) % contacts.length;
    }

    setInterval(rotateContact, 5000); // Change contact method every 5 seconds
});

