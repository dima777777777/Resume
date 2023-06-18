const footer = document.querySelector("footer");

function updateScrollHeight() {
  const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollHeight >= footer.offsetHeight) {
    footer.style.position = "fixed";
    footer.style.top = "calc(100vh - 48px)";
  } else {
    footer.style.position = "absolute";
    footer.style.top = "100vh";
  }
}

window.addEventListener("scroll", updateScrollHeight);
window.addEventListener("resize", updateScrollHeight);
window.addEventListener("load", updateScrollHeight);