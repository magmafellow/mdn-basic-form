const price = document.querySelector("#house-price_field");
const output = document.querySelector(".house-price-output");

output.textContent = price.value;

price.addEventListener("input", () => {
  output.textContent = price.value;
});