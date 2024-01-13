/* Please ❤ this if you like it! */

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Full Stack Developer",
      "Fresher",
      "Web Developer",
      "Mobile App Developer",
      "MERN Developer",
      "Freelancer",
      "Volunteer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: [
      "Front end developer",
      "Web Developer",
      "Mobile App Developer",
      "MERN Developer",
      "Technician",
      "Designer",
      "Freelancer",
      "Manager",
      "Volunteer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

(function ($) {
  "use strict";

  //Page cursors

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      (t.style.left = n.clientX + "px"),
        (t.style.top = n.clientY + "px"),
        (e.style.left = n.clientX + "px"),
        (e.style.top = n.clientY + "px"),
        (i.style.left = n.clientX + "px"),
        (i.style.top = n.clientY + "px");
    });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  //About page

  $(".about-text").on("click", function () {
    $("body").addClass("about-on");
  });
  $(".about-close").on("click", function () {
    $("body").removeClass("about-on");
  });

  //Contact page

  $(".contact-text").on("click", function () {
    $("body").addClass("contact-on");
  });
  $(".contact-close").on("click", function () {
    $("body").removeClass("contact-on");
  });

  //Travel portfolio page

  $(".travel").on("click", function () {
    $("body").addClass("travel-on");
  });
  $(".travel-close").on("click", function () {
    $("body").removeClass("travel-on");
  });
  //hustle portfolio page

  $(".hustle").on("click", function () {
    $("body").addClass("hustle-on");
  });
  $(".hustle-close").on("click", function () {
    $("body").removeClass("hustle-on");
  });
  //exotic portfolio page

  $(".exotic").on("click", function () {
    $("body").addClass("exotic-on");
  });
  $(".exotic-close").on("click", function () {
    $("body").removeClass("exotic-on");
  });

  //Wildlife portfolio page

  $(".wildlife").on("click", function () {
    $("body").addClass("wildlife-on");
  });
  $(".wildlife-close").on("click", function () {
    $("body").removeClass("wildlife-on");
  });

  //Nature portfolio page

  $(".nature").on("click", function () {
    $("body").addClass("nature-on");
  });
  $(".nature-close").on("click", function () {
    $("body").removeClass("nature-on");
  });
})(jQuery);
//skills slider
const slider = document.querySelector(".slider");
let currentIndex = 0;

function slideNext() {
  const items = document.querySelectorAll(".item");
  slider.appendChild(items[0]);
  currentIndex = (currentIndex + 1) % items.length;
}

function slidePrev() {
  const items = document.querySelectorAll(".item");
  slider.prepend(items[items.length - 1]);
  currentIndex = (currentIndex - 1 + items.length) % items.length;
}

// Set the initial automatic sliding interval
let intervalId = setInterval(slideNext, 9000); // Slide every 3 seconds

function activate(e) {
  clearInterval(intervalId); // Clear the interval to avoid conflicts
  const items = document.querySelectorAll(".item");

  if (e.target.matches(".next")) {
    slideNext();
  } else if (e.target.matches(".prev")) {
    slidePrev();
  }

  // Set a new interval after each click
  intervalId = setInterval(slideNext, 3000);
}

document.addEventListener("click", activate, false);
// about
var typing = new Typed(".text", {
  strings: ["", "Lets say hi each other.", "Looking for me."],
  typeSpeed: 150,
  backSpeed: 40,
  loop: true,
});

// GSAP
gsap.registerPlugin(ScrollTrigger);
const introsplitTypes = document.querySelectorAll(".left-part h1");
introsplitTypes.forEach((char, i) => {
  const i_text = new SplitType(char);
  gsap.to(i_text.chars, {
    y: 0,
    stagger: 0.08, // text splitting transition
    duration: 0.3, // full text duration
  });
});
