export function preventDefaultLinks(links) {
  links.forEach((links) => {
    links.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
}
