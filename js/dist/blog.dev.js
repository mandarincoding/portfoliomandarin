"use strict";

window.onload = function () {
  var rabiits = document.getElementById("rabbits");
  var i = 0;
  var sliderBox = document.getElementById("sliderBox");
  $(".some2").on("click", function () {
    if (i == 0) {
      rabbits.style.left = 18 + "%";
      rabbits.style.top = 29.7 + "%";
      var temp = '<article class="sliderBox2"></article>';
      sliderBox.innerHTML = temp;
    }
  });
  $(".some1").on("click", function () {
    if (i == 0) {
      rabbits.style.left = 3 + "%";
      rabbits.style.top = 14.7 + "%";
      var temp = '<article class="sliderBox2"><p>welcom rabbit\'s world<p></article>';
      sliderBox.innerHTML = temp;
    }
  });
  $(".some3").on("click", function () {
    if (i == 0) {
      rabbits.style.left = 33 + "%";
      rabbits.style.top = 44.7 + "%";
      var temp = '<div class="sliderBox2">';
      temp += '<div><a href="http://pager.kr/~c14st03/%ea%b1%b0%ec%8a%a4%eb%a6%84%eb%8f%88%ea%b3%84%ec%82%b0%ea%b8%b0/%ea%b1%b0%ec%8a%a4%eb%a6%84%eb%8f%88%ea%b3%84%ec%82%b0%ea%b8%b0.html"><img class="imageatg" src="./image/당근당근.png"></a>';
      temp += '<figcaption>케이크 하우스</figcaption></div>';
      temp += '<div><a href="http://pager.kr/~c14st03/%eb%b2%a4%ed%8b%80%eb%a6%ac/car.html"><img class="imageatg" src="./image/당근당근.png"></a>';
      temp += '<figcaption>벤틀리 홈페이지</figcaption></div>';
      temp += '<div><a href="http://pager.kr/~c14st03/%ec%83%81%ec%84%b8%ed%8e%98%ec%9d%b4%ec%a7%80/%ec%ba%90%eb%aa%a8%eb%a7%88%ec%9d%bc%ec%95%bd%ec%82%b0%ec%84%b1%ed%86%a0%eb%84%88.html"><img class="imageatg" src="./image/당근당근.png"></a>';
      temp += '<figcaption>캐모마일 토너</figcaption></div>';
      temp += '<div><a href="http://pager.kr/~c14st03/%ec%ba%90%eb%a6%ad%ed%84%b0%ec%86%8c%ea%b0%9c/%ed%8c%8c%ec%9b%8c%ed%8d%bc%ed%94%84%ea%b1%b8.html"><img class="imageatg" src="./image/당근당근.png"></a>';
      temp += '<figcaption>파워퍼프걸</figcaption></div>';
      temp += '</div>';
      sliderBox.innerHTML = temp;
    }
  });
  $(".some4").on("click", function () {
    if (i == 0) {
      rabbits.style.left = 48 + "%";
      rabbits.style.top = 59.7 + "%";
      var temp = '<article class="sliderBox2"></article>';
      sliderBox.innerHTML = temp;
    }
  });
  $(".some5").on("click", function () {
    if (i == 0) {
      rabbits.style.left = 63 + "%";
      rabbits.style.top = 74.7 + "%";
      var temp = '<article class="sliderBox2"></article>';
      sliderBox.innerHTML = temp;
    }
  });
};