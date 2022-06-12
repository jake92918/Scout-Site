document.getElementById("NavMenuButton").onclick = (ev) => {
  ev.stopPropagation();
  var x = document.querySelector(
    ".NavigationHeader .HeaderLinks .dropdownMenu"
  );

  if (x.clientHeight) {
    x.style.height = 0;
  } else {
    var z = document.querySelector(".dropdownMenuHeightWrapper");
    x.style.height = z.clientHeight + "px";
  }
};

document.onclick = () => {
  var x = document.querySelector(
    ".NavigationHeader .HeaderLinks .dropdownMenu"
  );
  x.style.height = 0;
};

var upperBound = window.innerWidth;
var lowerBound = 1024;
var steps = 300;

var tickValue = (upperBound - lowerBound) / steps;

document.addEventListener("scroll", function (e) {
  var offset = window.pageYOffset;
  if (offset <= steps) {
    var count = lowerBound + tickValue * offset;
    document.querySelector(".NavigationHeader").style.width = count + "px";
  } else {
    document.querySelector(".NavigationHeader").style.width = upperBound + "px";
  }
});

window.onresize = () => {
    upperBound = window.innerWidth;
};
