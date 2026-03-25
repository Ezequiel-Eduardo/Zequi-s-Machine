const results = document.querySelectorAll(".result");

results.forEach((item) => {
  item.addEventListener("click", () => {
    
    results.forEach((el) => el.classList.remove("active"));
    
    item.classList.add("active");
  });
});