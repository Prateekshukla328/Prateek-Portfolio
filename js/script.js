/* ==========================================
   SMOOTH ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ==========================================
   STICKY NAVBAR EFFECT
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,17,31,.92)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(8,17,31,.55)";
        header.style.boxShadow = "none";

    }

});


/* ==========================================
   FADE-IN ON SCROLL
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* ==========================================
   TYPING EFFECT
========================================== */

const text = [
    "Java Developer",
    "Founder @ Shuprama Kitchen",
    "Full Stack Learner",
    "Problem Solver"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

const typing = document.createElement("span");
typing.className = "typing";

document.querySelector(".hero-left h2").appendChild(typing);

function type() {

    currentText = text[i];

    if (!isDeleting) {

        typing.textContent = currentText.substring(0, j++);

        if (j > currentText.length) {

            isDeleting = true;

            setTimeout(type, 1200);

            return;

        }

    } else {

        typing.textContent = currentText.substring(0, j--);

        if (j < 0) {

            isDeleting = false;

            i++;

            if (i >= text.length) i = 0;

        }

    }

    setTimeout(type, isDeleting ? 45 : 90);

}

type();


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});


/* ==========================================
   PROJECT CARD HOVER
========================================== */

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(59,130,246,.25),
            rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.05)";

    });

});


/* ==========================================
   SCROLL TO TOP
========================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show-top");

    } else {

        topBtn.classList.remove("show-top");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
"%cPortfolio Developed by Prateek Shukla",
"color:#3b82f6;font-size:18px;font-weight:bold;"
);