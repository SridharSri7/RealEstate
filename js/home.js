/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  document.documentElement.classList.toggle("no-scroll", isOpen);
  document.body.classList.toggle("no-scroll", isOpen);

  menuToggle.innerHTML = isOpen ? "✕" : "☰";
});

/* SCROLL REVEAL */



const reveals = document.querySelectorAll(
'.reveal-left,.reveal-right,.reveal-top,.reveal-bottom,.reveal-scale,[data-reveal]'
);

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }

  });

},{
  threshold:0.15
});

reveals.forEach(el=>{
  observer.observe(el);
});



/* LUXURY FLOATING EFFECT */

const card = document.querySelector(".hero__card");

window.addEventListener("mousemove",(e)=>{

  const x = (window.innerWidth/2 - e.clientX)/40;
  const y = (window.innerHeight/2 - e.clientY)/40;

  card.style.transform =
  `rotateY(${-x}deg) rotateX(${y}deg)`;

});


/* PARALLAX BACKGROUND */

window.addEventListener("scroll",()=>{

  const scroll = window.pageYOffset;

  document.querySelector(".hero__bg").style.transform =
  `translateY(${scroll * 0.25}px)`;

});

// =================== PREMIUM VILLAS =======================

const Villareveals = document.querySelectorAll(
  ".reveal-left, .reveal-right"
);

const Villaobserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("reveal-active");
    }
  });
},{
  threshold:0.15
});

Villareveals.forEach(item=>{
  Villaobserver.observe(item);
});

// ===================== WHY WE CHOOSE US ====================

// const items = document.querySelectorAll(".reveal");

// const Chooseobserver = new IntersectionObserver((entries)=>{
//   entries.forEach(entry=>{
//     if(entry.isIntersecting){
//       entry.target.classList.add("active");
//     }
//   });
// },{
//   threshold:0.15
// });

// items.forEach(el=>{
//   Chooseobserver.observe(el);
// });


// ================== VIRTUAL PROPERTY TOURS ==================

const items = document.querySelectorAll(
  ".reveal-left, .reveal-right, .reveal-top, .reveal-bottom"
);

const Virtualobserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("reveal-active");
    }
  });
},{
  threshold:0.15
});

items.forEach(el=>{
  Virtualobserver.observe(el);
});

// ================== EMI CALCULATOR ===================

const EMIitems = document.querySelectorAll(
  ".reveal-left, .reveal-right, .reveal-top, .reveal-bottom"
);

const EMIobserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("reveal-active");
    }
  });
},{
  threshold:0.15
});

EMIitems.forEach(el=>{
  EMIobserver.observe(el);
});