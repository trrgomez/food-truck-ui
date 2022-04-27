let menu = document.querySelector("#menu-icon");
let primaryNav = document.querySelector("#primary-nav");

// toggles the menu button
menu.addEventListener("click", function () {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    menu.classList.add("fa-times");
  } else {
    primaryNav.setAttribute("data-visible", false);
    menu.classList.remove("fa-times");
  }
});
