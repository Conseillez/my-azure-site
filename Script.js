let count = 0;
const btn = document.getElementById("clicker");
btn.addEventListener("click", () => {
  count++;
  btn.textContent = `Clicks: ${count}`;
});