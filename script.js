document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".links a");
  links.forEach((link, index) => {
    link.style.opacity = 0;
    setTimeout(() => {
      link.style.transition = "opacity 0.6s ease";
      link.style.opacity = 1;
    }, 300 * index);
  });
});
