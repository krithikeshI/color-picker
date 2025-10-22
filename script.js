const colorInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");
const applyBtn = document.getElementById("applyBtn");

colorInput.addEventListener("input", () => {
  colorCode.textContent = colorInput.value;
});

applyBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = colorInput.value;
});
