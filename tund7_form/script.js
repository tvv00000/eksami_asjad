document.getElementById("supportForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stops page reload

  const message = document.getElementById("thankYouMessage");

  this.reset(); // clears form

  message.classList.remove("hidden");
});