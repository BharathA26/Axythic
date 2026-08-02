(function () {
  var savedTheme = localStorage.getItem("axythic-theme");
  var theme = savedTheme === "light" ? "light" : "dark";
  document.documentElement.classList.add(theme);
})();
