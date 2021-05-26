$(document).ready(function () {

  let favorites = JSON.parse(localStorage.getItem('favorites')) || []

  $('.form-button').click(function () {
    $('.form-container').animate({
      left: '300px',
      top: '200px',
      height: 'toggle'
    }, 2000)
  })

  $('.favorites-button').click(function () {
    $('.favorites').show();
  })

  $('.favorites-hearth-icon').click(function(){
    let imagesAttr = $(this).parent().prev().attr('src');
    favorites.push(imagesAttr)
    localStorage.setItem('favorites', favorites);

    $('.favorites').append(`<img  class="n" src='${imagesAttr}'>`);
    
  })

})

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var navbarHeight = $(".navbar").height();
  if (scroll > navbarHeight) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top")
  }
});