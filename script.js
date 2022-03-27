// preload
const load = document.getElementById("preload");
window.addEventListener("load", function () {
  this.setTimeout(function () {
    load.style.display = "none";
  }, 2000);
});
