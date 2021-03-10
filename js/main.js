$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var navbarHeight = $(".navbar").height();
  if (scroll > navbarHeight) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top")
  }
});