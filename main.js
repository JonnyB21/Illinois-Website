document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const email = document.getElementById("email").value;
      const confirmEmail = document.getElementById("confirmEmail").value;
      if (email !== confirmEmail) {
        alert("Email addresses do not match. Please check and try again.");
        e.preventDefault();
      }
    });
  }
});

