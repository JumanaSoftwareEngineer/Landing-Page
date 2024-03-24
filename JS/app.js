/**
* @description Represents a articale about Highest Mountains
* @constructor
* @param {string} title - Exploring Earth's Pinnacles - A Journey to the World's Highest Mountains
* @param {string} author - Jumana Ibrahim Abdullah AL.Balushi
*/

document.addEventListener('DOMContentLoaded', function () {
    // Select the navbar list element
    const navbarList = document.getElementById('navbar__list');
    // Select all section elements
    const sections = document.querySelectorAll('section');
    // Select the menu element
    const menu = document.querySelector(".navbar__menu");
    // Variable to track scrolling timeout
    let isScrolling;

    // Loop through sections to create navigation links
    for (const section of sections) {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');

        // Set href and innerHTML for the anchor element
        anchor.href = `#${section.id}`;
        anchor.innerHTML = section.dataset.nav;

        // Add classes to both the anchor and list item for styling
        anchor.classList.add('menu__link');
        listItem.classList.add('nav-item');

        // Append the anchor to the list item, and the list item to the navbar list
        listItem.appendChild(anchor);
        navbarList.appendChild(listItem);

        // Add click event listener to each anchor
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            removeActiveClass();
            section.scrollIntoView({ behavior: "smooth" });
            anchor.classList.add('active');
        });
    }

    // Function to remove active class from all links
    function removeActiveClass() {
        const links = document.querySelectorAll('.menu__link');
        for (const link of links) {
            link.classList.remove('active');
        }
    }

    // Function to highlight the active section while scrolling
    function highlightActiveSection() {
        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                removeActiveClass();
                const correspondingLink = document.querySelector(`.menu__link[href="#${section.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                    showHideMenu();
                }
            }
        }
    }

    // Add scroll event listener to highlight active section while scrolling
    window.addEventListener('scroll', function () {
        clearTimeout(isScrolling);
        highlightActiveSection();
        // Set a timeout to hide the menu after a delay
        isScrolling = setTimeout(function () {
            menu.style.display = "none";
        }, 1000); 
    });

    // Add mousemove event listener to show the menu while moving the mouse
    window.addEventListener('mousemove', function () {
        showHideMenu();
    });

    // Assuming you have a button with the id "topBtn"
    let mybutton = document.getElementById("topBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        clearTimeout(isScrolling);
        scrollFunction();
        // Set a timeout to hide the menu after a delay
        isScrolling = setTimeout(function () {
            menu.style.display = "none";
        }, 1500); // Set your desired delay
    };

    // Add click event listener to the scroll-to-top button
    mybutton.onclick = function () {
        goToTheTop();
    };

    // Function to handle scroll behavior and show/hide the menu
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
            showHideMenu();
        } else {
            mybutton.style.display = "none";
        }
    }

    // Function to show the menu
    function showHideMenu() {
        menu.style.display = "block";
    }
});

// Function to remove active class from all links when scrolling to the top
function removeActiveClass() {
    const links = document.querySelectorAll('.menu__link');
    for (const link of links) {
        link.classList.remove('active');
    }
}

// Function to scroll to the top of the document and remove active class
function goToTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    removeActiveClass();
}
