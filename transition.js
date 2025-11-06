/* transition.js — smooth fade transitions between internal pages */
document.querySelectorAll("a").forEach(link => {
  const url = new URL(link.getAttribute("href", 2), window.location.href);
  if (url.origin === window.location.origin && /\.html?$/.test(url.pathname)) {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.add("fade-out-body");
      setTimeout(() => (window.location.href = url.href), 400);
    });
  }
});
