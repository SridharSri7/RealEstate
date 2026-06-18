const items = document.querySelectorAll(
  ".reveal-left, .reveal-right, .reveal-top, .reveal-bottom"
);

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("reveal-active");
    }
  });
},{
  threshold:0.2
});

items.forEach(el=>{
  observer.observe(el);
});


// =========== FAQ =============

// ACCORDION
const FAQitems = document.querySelectorAll(".faq-item");
const buttons = document.querySelectorAll(".faq-question");

buttons.forEach((btn, index)=>{
  btn.addEventListener("click", ()=>{
    FAQitems[index].classList.toggle("active");
  });
});

// SCROLL REVEAL
const revealItems = document.querySelectorAll(".faq-item");

const FAQobserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("reveal-active");
    }
  });
},{
  threshold:0.2
});

revealItems.forEach(el=>{
  FAQobserver.observe(el);
});


/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  if(navLinks.classList.contains("active")){
      document.body.style.overflow = "hidden";
      menuToggle.innerHTML = "✕";
  }else{
      document.body.style.overflow = "";
      menuToggle.innerHTML = "☰";
  }

});
