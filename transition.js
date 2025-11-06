// Simple fade-out before navigating
document.querySelectorAll("a.page-link").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    document.body.classList.add("fade-out-body");
    setTimeout(()=>{window.location.href=link.href;},400);
  });
});
