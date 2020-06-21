window.onload = function () {
  // When the user scrolls the page, execute headerPosFunction
  window.onscroll = function () {
    headerPosFunction();
  };

  // // Get the header
  // var header = document.getElementById("myHeader");

  // // Get the offset position of the navbar
  // var sticky = header.offsetTop;

  // // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // function headerPosFunction() {
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }
};

function dropdownMenu() {
  var x = document.getElementById("dropdown-menu");
  if (x.style.display == "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

document.getElementById("menu-icon").onclick = function changeContent() {
  dropdownMenu();
};

var elements = document.getElementsByClassName("menu-item");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", dropdownMenu, false);
}
