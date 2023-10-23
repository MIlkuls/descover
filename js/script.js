document.querySelector(".opener").addEventListener("click", () => {
  document.querySelector(".menu").classList.add("active");
  document.querySelector(".overlay").style.display = "block";
});

function closeMenu() {
  document.querySelector(".menu").classList.remove("active");
  document.querySelector(".overlay").style.display = "none";
}
document.querySelector(".overlay").addEventListener("click", closeMenu);

document.querySelectorAll(".menu li").forEach(el => {
  el.addEventListener("click", () => {
    switch (el.innerHTML.toLowerCase()) {
      case "home":
        smoothScrollTo("#about");
        closeMenu();
        break;
      case "hotels":
        smoothScrollTo("#accommodation");
        closeMenu();
        break;
      case "restaurant":
        smoothScrollTo("#accommodation");
        closeMenu();
        break;
      case "tours":
        smoothScrollTo("#activities");
        closeMenu();
        break;
      case "destinations":
        smoothScrollTo("#destinations");
        closeMenu();
        break;
      case "activities":
        smoothScrollTo("#activities");
        closeMenu();
        break;
      case "contact":
        smoothScrollTo("#footer");
        closeMenu();
        break;
      default:
        console.log("hey");
    }
  });
});

function smoothScrollTo(targetSelector) {
  const targetElement = document.querySelector(targetSelector);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
}
