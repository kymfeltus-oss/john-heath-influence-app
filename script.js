// Adds a simple welcome interaction for the logo
const logo = document.querySelector(".logo.interactive");

if (logo) {
  logo.addEventListener("click", () => {
    alert("Welcome to the John Heath Influence App!");
  });
}
