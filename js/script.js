
  
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Toggle the visibility of the nav links when the menu icon is clicked
    document.getElementById('menu-icon').addEventListener('click', function() {
        var navLinks = document.querySelector('.transparent-header nav ul');
        navLinks.classList.toggle('show');
    });
});

document.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll(".transparent-header nav ul li a");

    sections.forEach(function(section) {
        var top = section.offsetTop - header.offsetHeight;
        var bottom = top + section.offsetHeight;

        // Check if both the top and bottom of the section are in the viewport
        if (window.scrollY >= top && window.scrollY < bottom) {
            // Remove active class from all navigation links
            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            // Add active class to the corresponding navigation link
            var targetLink = document.querySelector('a[href="#' + section.id + '"]');
            if (targetLink) {
                targetLink.classList.add("active");
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }

    // Smooth scrolling and toggle navigation code remains the same
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the download button
    var downloadButton = document.getElementById('downloadButton');

    // Define the file URL
    var fileUrl = 'assets/FLORES_CV.pdf'; // Update with your file URL

    // Add event listener for click event
    downloadButton.addEventListener('click', function() {
        // Create a link element
        var link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'CURICCULUM_VITAE_FLORES.pdf'; // Set the file name
        document.body.appendChild(link);

        // Programmatically trigger the click event
        link.click();

        // Remove the link element from the DOM
        document.body.removeChild(link);
    });
});

/*=============== Typed JS ================*/
const type = new Typed('#auto-text', {
    strings: ['Dreamer', 'Lifelong Learner', 'Student', 'Photographer', 'Explorer', 'Risk-taker','Light Chaser' , 'Lover'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

// Select the target section element
const targetSection = document.getElementById('target-section-id');

// Scroll to the target section
targetSection.scrollIntoView({
  behavior: 'smooth', // Add smooth scrolling behavior
  block: 'start' // Scroll to the top of the target section
});
