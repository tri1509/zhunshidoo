let nav = document.getElementById("nav");
let items = document.querySelectorAll(".item");
document.addEventListener("scroll", (event) => {
  if (window.scrollY > 70) {
    nav.classList.add("tofixed");
  } else {
    nav.classList.remove("tofixed");
  }
  items.forEach((item) => {
    if (item.offsetTop - window.scrollY < 550) {
      item.classList.add("active");
    }
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}

var offset = 500;
var duration = 100;
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) $("#top-up").fadeIn(duration);
    else $("#top-up").fadeOut(duration);
  });
  $("#top-up").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      duration
    );
  });
  $(".loader").delay(0).fadeOut("slow");
  $("#overlayer").delay(0).fadeOut("slow");
  $(".top-bar-menu").click(function () {
    $("#mySidenav").slideToggle(300);
  });
  $(".center").on("init", function () {
    $(".slick-active").prev().removeClass("nextdiv").addClass("prevdiv");
    $(".slick-active").next().removeClass("prevdiv").addClass("nextdiv");
  });
  $(".center").on("afterChange", function () {
    console.log($(".slick-active"));
    $(".slick-active").prev().removeClass("nextdiv").addClass("prevdiv");
    $(".slick-active").next().removeClass("prevdiv").addClass("nextdiv");
  });
  $(".image-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'>❮</button>",
    nextArrow: "<button type='button' class='slick-next pull-right'>❯</button>",
    autoplay: true,
    autoplaySpeed: 9000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
