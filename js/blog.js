$(function () {
  var rota = 0;
  $(".upBtn").on("click", function () { //up버튼 눌렀을 때
    rota += 90;
    $(".record").css("transform", "rotate(" + rota + "deg)");
    if (Math.abs(rota % 360) == 0) {
      $(".page1").css("opacity", "1");
      $(".page2").css("opacity", "0");
      $(".page3").css("opacity", "0");
      $(".page4").css("opacity", "0");
    } else if (Math.abs(rota % 360) == 90) {
      $(".page1").css("opacity", "0");
      $(".page2").css("opacity", "1");
      $(".page3").css("opacity", "0");
      $(".page4").css("opacity", "0"); 
    } else if (Math.abs(rota % 360) == 180) {
      $(".page1").css("opacity", "0");
      $(".page2").css("opacity", "0");
      $(".page3").css("opacity", "1");
      $(".page4").css("opacity", "0"); 
    } else if (Math.abs(rota % 360) == 270) {
      // 270도
      $(".page1").css("opacity", "0");
      $(".page2").css("opacity", "0");
      $(".page3").css("opacity", "0");
      $(".page4").css("opacity", "1");
    }
  });
  $(".downBtn").on("click", function () {
    rota += -90;
    $(".record").css("transform", "rotate(" + rota + "deg)");
    if (Math.abs(rota % 360) == 0) {
      $(".page1").css("opacity", "1");
      $(".page2").css("opacity", "0");
      $(".page3").css("opacity", "0");
      $(".page4").css("opacity", "0");
    } else if (Math.abs(rota % 360) == 90) {
      $(".page1").css("opacity", "0");
      $(".page2").css("opacity", "1");
      $(".page2").html('<div class="movingText testMove1">KIM GYURI</div>');
      $(".page2").append('<div class="movingText testMove2">1996.05.16</div>');
      $(".page2").append(
        '<div class="movingText testMove3">010.5913.7294</div>'
      );
      $(".page2").append(
        '<div class="movingText testMove4">mandarincoding@gmail.com</div>'
      );
      $(".page2").append('<div class="movingText testMove5">skill</div>');
      $(".testMove1").animate({ right: "100" }, 1500);
      $(".testMove2").delay(1000).animate({ right: "100" }, 1500);
      $(".testMove3").delay(2000).animate({ right: "100" }, 1500);
      $(".testMove4").delay(3000).animate({ right: "100" }, 1500);
      $(".testMove5").delay(4000).animate({ right: "100" }, 1500);
      $(".page3").css("opacity", "0");
      $(".page4").css("opacity", "0");
      
    } else if (Math.abs(rota % 360) == 180) {
      $(".page1").css("opacity", "0");
      $(".page2").css("opacity", "0");
      $(".page4").css("opacity", "0");
      $(".page3").css("opacity", "1");
      $(".page3").html('<div class="htmlName">html5</div><div class="skillAll skill1"></div>');
      $(".page3").append('<div class="jspName">javascript</div><div class="skillAll skill2"></div>');
      $(".page3").append('<div class="cssName">css</div><div class="skillAll skill3"></div>');
      $(".page3").append('<div class="jqueryName">jquery</div><div class="skillAll skill4"></div>');
      $(".page3").append('<div class="photoName">photoshop</div><div class="skillAll skill5"></div>');
      $(".skill1").animate({ width: "90%" }, 1500);
      $(".skill2").delay(1000).animate({ width: "40%" }, 1500);
      $(".skill3").delay(2000).animate({ width: "50%" }, 1500);
      $(".skill4").delay(3000).animate({ width: "10%" }, 1500);
      $(".skill5").delay(4000).animate({ width: "70%" }, 1500);
      
    } else if (Math.abs(rota % 360) == 270) {
      // 270도
      $(".page1").css("opacity", "0");
      $(".page2").css("opacity", "0");
      $(".page3").css("opacity", "0");
      $(".page4").css("opacity", "1");
      $(".page4").html('<div class="go1"><a href="http://mandarincoding7.dothome.co.kr/power"><img  class="popUp1" src="./image/캐릭터소개.jpg" alt="파워퍼프걸"></a></div>');
      $(".page4").append('<div class="go2"><a href="https://mandarincoding.github.io/alive/"><img class="popUp2" src="./image/얼라이브.jpg" alt="얼라이브"></a></div>');
      $(".page4").append('<div class="go3"><a href="https://mandarincoding.github.io/cakehouse/"><img class="popUp3" src="./image/케이크하우스.jpg" alt="케이크하우스"></a></div>');
    }
  });
  $(".go1").hover(
    function () {
      $(".go1").css("z-index", "400");
    },
    function () {
      $(".go1").css("z-index", "100");
    }
  );
  $(".go2").hover(
    function () {
      $(".go2").css("z-index", "400");
    },
    function () {
      $(".go2").css("z-index", "200");
    }
  );
  $(".go3").hover(
    function () {
      $(".go3").css("z-index", "300");
    },
    function () {
      $(".go3").css("z-index", "200");
    }
  );
});
