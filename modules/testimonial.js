export function setupTestimonial(navLinks, itemContainers, iconsSvg) {
  navLinks.forEach((navItems, index) => {
    navItems.addEventListener("click", function (e) {
      e.preventDefault();

      if (e.target.classList.contains("testimonial-list-link"))
        e.stopPropagation();

      const activeCategory = navItems.getAttribute("data-attribute");

      itemContainers.forEach((containers) => {
        if (containers.getAttribute("data-attribute") === activeCategory) {
          containers.style.display = "block";
        } else if (activeCategory === "All-category") {
          containers.style.display = "block";
        } else {
          containers.style.display = "none";
        }
      });

      navLinks.forEach((navItems) => navItems.classList.remove("active"));
      navItems.classList.add("active");

      iconsSvg.forEach((svgs) => svgs.classList.remove("active"));
      iconsSvg[index].classList.add("active");
    });
  });
}
