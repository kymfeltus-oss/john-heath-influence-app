/* transition.js — smooth fade transitions between internal pages */

document.querySelectorAll("a").forEach(link => {
  const url = new URL(link.href, window.location.origin);

  // Only intercept internal .html links
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
