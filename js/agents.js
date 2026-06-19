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
