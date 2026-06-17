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
