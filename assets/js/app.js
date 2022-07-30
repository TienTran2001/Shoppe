const $ = document.querySelector.bind(document);
const header = $(".header");
const banner = $(".banner");
const categories = $(".categories");

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    header.classList.add("header-mobile");
  } else {
    header.classList.remove("header-mobile");
  }
};
