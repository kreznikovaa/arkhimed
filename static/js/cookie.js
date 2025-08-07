
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");

  if (!localStorage.getItem("cookieAccepted")) {
    banner.classList.remove("hidden");
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookieAccepted", "true");
    banner.classList.add("hidden");
  });
});