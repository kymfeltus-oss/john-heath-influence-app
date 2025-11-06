/* transition.js — universal smooth-page script */
document.querySelectorAll("a").forEach(link => {
  const url = new URL(link.href, window.location.origin);

  // Only intercept links that point to this same site and end in .html
  if (url.origin === window.location.origin && url.pathname.endsWith(".html")) {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.add("fade-out-body");
      setTimeout(() => {
        window.location.href = link.href;
      }, 400);
    });
  }
});
