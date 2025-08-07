document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const button = document.getElementById("cookie-accept");

  if (!localStorage.getItem("cookieAccepted")) {
    banner.style.display = "block";
  }

  button.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", "true");
    banner.style.display = "none";
  });
});