const form = document.getElementById("productForm");
const tbody = document.getElementById("productTableBody");
const template = document.getElementById("rowTemplate");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const qty = document.getElementById("qty").value;
  const category = document.getElementById("category").value;

  const clone = template.content.cloneNode(true);

  clone.querySelector(".t-name").textContent = name;
  clone.querySelector(".t-price").textContent = price + "€";
  clone.querySelector(".t-qty").textContent = qty;
  clone.querySelector(".t-category").textContent = category;

  tbody.appendChild(clone);

  form.reset();
  document.getElementById("message").classList.remove("hidden");
});