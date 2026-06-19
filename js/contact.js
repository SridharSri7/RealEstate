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

  const isOpen = navLinks.classList.contains("active");

  document.documentElement.classList.toggle("no-scroll", isOpen);
  document.body.classList.toggle("no-scroll", isOpen);

  menuToggle.innerHTML = isOpen ? "✕" : "☰";
});


// ==============================
const nameInput = document.getElementById("fullName");
const phoneInput = document.getElementById("phoneNumber");

nameInput.addEventListener("input", () => {
  nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, '');
});

phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');
});