
function setActiveLink() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    // Check if the link's href matches the current page path
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active'); // Add 'active' class to the link
    } else {
      link.classList.remove('active'); // Remove 'active' class from other links
    }
  });
}

// Call setActiveLink() once when the page loads
document.addEventListener('DOMContentLoaded', setActiveLink);

const paragraph = "a passionate web developer with a love for crafting beautiful and functional websites"
const typingParagraph = document.getElementById("typing-paragraph");

function typeText() {
  let charIndex = 0;
  const typingInterval = 60; // Adjust the typing speed (in milliseconds)

  function typeNextChar() {
    typingParagraph.textContent += paragraph[charIndex];
    charIndex++;

    if (charIndex < paragraph.length) {
      setTimeout(typeNextChar, typingInterval);
    }
  }

  typeNextChar();
}

// Call the function to start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", typeText);
