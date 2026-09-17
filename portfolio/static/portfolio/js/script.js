document.addEventListener("DOMContentLoaded", function () {


    /* ================= TYPING EFFECT ================= */

    const typingText = document.getElementById("typingText");

    const roles = [
        "Python Developer",
        "Django Developer",
        "Python Full Stack Developer",
        "Aspiring Software Developer"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            typingText.textContent =
                currentRole.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentRole.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typingText.textContent =
                currentRole.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                roleIndex++;

                if (roleIndex >= roles.length) {
                    roleIndex = 0;
                }

            }
        }

        const speed = deleting ? 50 : 90;

        setTimeout(typeEffect, speed);
    }


    typeEffect();


    /* ================= MOBILE MENU ================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("open");

            const icon = menuToggle.querySelector("i");

            if (navMenu.classList.contains("open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }


    /* ================= CLOSE MOBILE MENU ================= */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    /* ================= THEME TOGGLE ================= */

    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("portfolioTheme");

    if (savedTheme === "light") {

        document.body.classList.add("light-theme");

        themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';

    }


    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-theme");

        const isLight =
            document.body.classList.contains("light-theme");

        if (isLight) {

            localStorage.setItem(
                "portfolioTheme",
                "light"
            );

            themeToggle.innerHTML =
                '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem(
                "portfolioTheme",
                "dark"
            );

            themeToggle.innerHTML =
                '<i class="fas fa-moon"></i>';

        }

    });


    /* ================= ACTIVE NAVIGATION ================= */

    const sections =
        document.querySelectorAll("section[id]");


    function updateActiveNav() {

        const scrollPosition =
            window.scrollY + 150;

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navLinks.forEach(function (link) {

                    link.classList.remove("active");

                });

                const activeLink =
                    document.querySelector(
                        `.nav-link[href="#${sectionId}"]`
                    );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    /* ================= BACK TO TOP ================= */

    const backToTop =
        document.getElementById("backToTop");


    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ================= SCROLL REVEAL ================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });

});