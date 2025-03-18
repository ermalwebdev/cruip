"use strict";
import { preventDefaultLinks } from "./modules/linksUnits.js";
import { setupVideoPlayer } from "./modules/videoPlayer.js";
import { setupTestimonial } from "./modules/testimonial.js";
import { removeIndexHtmlFromUrl } from "./modules/urlCleanup.js";

//Global Selector
const links = document.querySelectorAll("a");
const testimonialNavBarLinks = document.querySelectorAll(
  ".testimonial-list-items"
);
const testimonialOriginalLinks = document.querySelectorAll(
  ".testimonial-list-link"
);
const testimonialItemContainers =
  document.querySelectorAll(".cards-testimonial");
const testimonialIconsSvg = document.querySelectorAll(".testimonial-svg");

//All links preventDefault
// preventDefaultLinks(links);

//VideoJS Settings
setupVideoPlayer("vid1", "../assets/videos/thumbnails/vid1-thumbnail.png");

//Testimonial setup
testimonialNavBarLinks.forEach((e) => {
  e.addEventListener("click", function (e) {
    e.preventDefault();
    const testiMonialStartPosition = document.querySelector(
      ".testimonial-navbar-container"
    );
    testiMonialStartPosition.scrollIntoView({ behavior: "smooth" });
  });
});

setupTestimonial(
  testimonialNavBarLinks,
  testimonialItemContainers,
  testimonialIconsSvg
);

//Removing Index URL from parameter
removeIndexHtmlFromUrl();

//Testimonial NavbarLinks showing first letter
const mobileMediaQuery = window.matchMedia("(max-width: 576px)");

document.addEventListener("DOMContentLoaded", function (e) {
  if (mobileMediaQuery.matches) {
    console.log("Ermal");
    testimonialOriginalLinks.forEach((letters) => {
      console.log(letters.textContent.trim());
      const firstLetter = letters.textContent.trim().charAt(0);
      letters.textContent = firstLetter;
    });
  }
});
