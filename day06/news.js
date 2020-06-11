const headerEl = document.querySelector("header");
const scrollToTop = document.querySelector(".scrollToTop");
window,
  addEventListener("scroll", () => {
    let height = headerEl.getBoundingClientRect().height;

    if (window.pageYOffset > 2000) {
      scrollToTop.style.display = "block";
    } else {
      scrollToTop.style.display = "none";
    }
  });


const captionsEl = document.querySelectorAll(".slide-caption");



const staggeringOption = {
  delay: 300,
  distance: "50px",
  duration: 500,
  easing: "ease-in-out",
  origin: "bottom",
};

ScrollReveal().reveal(".feature", { ...staggeringOption, interval: 350 });
ScrollReveal().reveal(".service-item", { ...staggeringOption, interval: 350 });




const scroll = new SmoothScroll('nav a[href*="#"],.scrollToTop a[href*="#"]', {
  header: "header",
  offset: 80,
});

document.addEventListener("scrollStart",()=>{
    if(headerEl.classList.contains("open")){
        headerEl.classList.remove("open");
    }
})


//折叠按钮
const burgerEl = document.querySelector(".burger");
burgerEl.addEventListener("click",()=>{
    headerEl.classList.toggle("open")
})
