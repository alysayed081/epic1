var navClick1 = document.querySelector("#nav-item1");
var navClick2 = document.querySelector("#nav-item2");
var navClick3 = document.querySelector("#nav-item3");
var navClick4 = document.querySelector("#nav-item4");
var navClick5 = document.querySelector("#nav-item5");
var navClick6 = document.querySelector("#nav-item6");

var sec1 = document.querySelector("#home");
var sec7 = document.querySelector("#home2");
var sec2 = document.querySelector("#about");
var sec3 = document.querySelector("#ser");
var sec4 = document.querySelector("#mun");
var sec5 = document.querySelector("#quality");
var sec6 = document.querySelector("#contact");

navClick1.addEventListener("click", function (e) {
  navClick1.classList.add("act");
  navClick2.classList.remove("act");
  navClick3.classList.remove("act");
  navClick4.classList.remove("act");
  navClick5.classList.remove("act");
  navClick6.classList.remove("act");
});
navClick6.addEventListener("click", function (e) {
  navClick6.classList.add("act");
  navClick1.classList.remove("act");
  navClick2.classList.remove("act");
  navClick3.classList.remove("act");
  navClick4.classList.remove("act");
  navClick5.classList.remove("act");
});

navClick2.addEventListener("click", function (e) {
  navClick2.classList.add("act");
  navClick1.classList.remove("act");
  navClick3.classList.remove("act");
  navClick4.classList.remove("act");
  navClick5.classList.remove("act");
  navClick6.classList.remove("act");
});

navClick3.addEventListener("click", function (e) {
  navClick3.classList.add("act");
  navClick2.classList.remove("act");
  navClick1.classList.remove("act");
  navClick4.classList.remove("act");
  navClick5.classList.remove("act");
  navClick6.classList.remove("act");
});

navClick4.addEventListener("click", function (e) {
  navClick4.classList.add("act");
  navClick2.classList.remove("act");
  navClick3.classList.remove("act");
  navClick1.classList.remove("act");
  navClick5.classList.remove("act");
  navClick6.classList.remove("act");
});

navClick5.addEventListener("click", function (e) {
  navClick5.classList.add("act");
  navClick2.classList.remove("act");
  navClick3.classList.remove("act");
  navClick1.classList.remove("act");
  navClick4.classList.remove("act");
  navClick6.classList.remove("act");
});

navClick1.addEventListener("click", function (e) {
  sec1.classList.remove("hide");
  sec7.classList.remove("hide");

  sec2.classList.add("hide");
  sec3.classList.add("hide");
  sec4.classList.add("hide");
  sec5.classList.add("hide");
  sec6.classList.add("hide");
});
navClick2.addEventListener("click", function (e) {
  sec2.classList.remove("hide");
  sec1.classList.add("hide");
  sec7.classList.add("hide");

  sec3.classList.add("hide");
  sec4.classList.add("hide");
  sec5.classList.add("hide");
  sec6.classList.add("hide");
});

navClick3.addEventListener("click", function (e) {
  sec3.classList.remove("hide");
  sec2.classList.add("hide");
  sec1.classList.add("hide");
  sec7.classList.add("hide");
  sec4.classList.add("hide");
  sec5.classList.add("hide");
  sec6.classList.add("hide");
});
navClick4.addEventListener("click", function (e) {
  sec4.classList.remove("hide");
  sec2.classList.add("hide");
  sec3.classList.add("hide");
  sec1.classList.add("hide");
  sec7.classList.add("hide");
  sec5.classList.add("hide");
  sec6.classList.add("hide");
});

navClick5.addEventListener("click", function (e) {
  sec5.classList.remove("hide");
  sec2.classList.add("hide");
  sec3.classList.add("hide");
  sec4.classList.add("hide");
  sec1.classList.add("hide");
  sec7.classList.add("hide");
  sec6.classList.add("hide");
});
navClick6.addEventListener("click", function (e) {
  sec6.classList.remove("hide");
  sec2.classList.add("hide");
  sec3.classList.add("hide");
  sec4.classList.add("hide");
  sec5.classList.add("hide");
  sec1.classList.add("hide");
  sec7.classList.add("hide");
});

var imgBox = document.querySelectorAll(".gal-img");
var pop = document.querySelector(".pop");
var popBox = document.querySelector(".pop-box");
var prevArrow = document.querySelector("#prev");
var nextArrow = document.querySelector("#next");
var closBtn = document.querySelector("#close");

var curIndex;

for (let i = 0; i < imgBox.length; i++) {
  imgBox[i].addEventListener("click", function (e) {
    curIndex = i;
    let imgSrc = e.currentTarget.querySelector("img").getAttribute("src");
    pop.classList.replace("d-none", "d-flex");

    popBox.style.setProperty("background-image", `url(${imgSrc})`);
  });
}

function nextImg() {
  curIndex++;

  if (curIndex >= imgBox.length) {
    curIndex = 0;
    let imgSrc = imgBox[curIndex].querySelector("img").getAttribute("src");
    console.log(imgSrc);
    popBox.style.setProperty("background-image", `url(${imgSrc})`);
  } else {
    let imgSrc = imgBox[curIndex].querySelector("img").getAttribute("src");
    console.log(imgSrc);
    popBox.style.setProperty("background-image", `url(${imgSrc})`);
  }
}

nextArrow.addEventListener("click", function () {
  nextImg();
});

function prevImg() {
  curIndex--;

  if (curIndex < 0) {
    curIndex = imgBox.length - 1;
    let imgSrc = imgBox[curIndex].querySelector("img").getAttribute("src");
    popBox.style.setProperty("background-image", `url(${imgSrc})`);
  } else {
    let imgSrc = imgBox[curIndex].querySelector("img").getAttribute("src");
    popBox.style.setProperty("background-image", `url(${imgSrc})`);
  }
}

prevArrow.addEventListener("click", function () {
  prevImg();
});

closBtn.addEventListener("click", function () {
  closeButton();
});

function closeButton() {
  pop.classList.replace("d-flex", "d-none");
}

pop.addEventListener("click", function () {
  closeButton();
});

popBox.addEventListener("click", function (e) {
  e.stopPropagation();
});
