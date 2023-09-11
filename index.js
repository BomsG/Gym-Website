window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

ScrollReveal({
  reset: true,
  distance: "70px",
  duration: 2500,
  delay: 300,
});

ScrollReveal().reveal(".txt", { delay: 350, origin: "left" });
ScrollReveal().reveal(".btn", { delay: 350, origin: "bottom" });
ScrollReveal().reveal(".contact-image", { delay: 350, origin: "left" });
ScrollReveal().reveal(".contact-txt", {
  delay: 350,
  origin: "right",
  interval: 200,
});
ScrollReveal().reveal(".first", { delay: 350, origin: "left" });
ScrollReveal().reveal(".second", { delay: 350, origin: "right" });
ScrollReveal().reveal(".register", { delay: 350, origin: "right" });
ScrollReveal().reveal(".about-content", { delay: 350, origin: "left" });
ScrollReveal().reveal(".hr", { delay: 350, origin: "top" });

var i = 0; //start point//
var images = [];
var time = 2500; // the time it takes to change//

//image list//
images[0] = `/img-1-.png`;
images[1] = `/img-2-.png`;
images[2] = `/img-3-.png`;
images[3] = `/img.last.png`;

//function to change the images//
function changeImg() {
  document.bodyType.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
