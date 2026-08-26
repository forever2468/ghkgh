const btn = document.getElementById("btn");
const out = document.getElementById("out");

btn.addEventListener("click", () => {
  const now = new Date().toLocaleTimeString();
  out.textContent = `✓ JavaScript is working perfectly — ${now}`;
  btn.textContent = "JavaScript Works ✓";
});
