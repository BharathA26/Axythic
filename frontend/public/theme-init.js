(function () {
  var savedTheme = localStorage.getItem("axythic-theme");
  var theme = savedTheme === "dark" ? "dark" : "light";
  document.documentElement.classList.add(theme);
})();
