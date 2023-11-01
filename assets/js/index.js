function main() {
  var menuBtn = document.getElementById("menuBtn");
  var sideNav = document.getElementById("sideNav");
  var isOpen = false;

  sideNav.style.right = "-250px";

  menuBtn.addEventListener("click", function () {
    if (isOpen) {
      sideNav.style.right = "-250px";
    } else {
      sideNav.style.right = "0";
    }
    isOpen = !isOpen;
  });
}

window.onload = function () {
  main();
};
