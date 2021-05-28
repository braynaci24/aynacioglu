$(document).ready(function () {
  let data = JSON.parse(localStorage.getItem('favorites')) || []


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

  $('.favorites-hearth-icon').click(function () {
    let imagesAttr = $(this).parent().prev().attr('src');
    let pieceName = $(this).prev().text();
    let pieceObject = {
      name: pieceName,
      images: imagesAttr,
    }
    
    data.push(pieceObject);
    localStorage.setItem('favorites', JSON.stringify(pieceObject));
    $('.favorites').append(`<div class="favorites-card"><img class="fav-images" src=" ${pieceObject.images}"> <span>${pieceObject.name}</span><i class="far fa-trash-alt trash"></i></div>`)
  })

  $('body').on('click', '.trash', function () {
    let srcTrash = $(this).prev().prev().attr('src');
    let textDelete = $(this).prev().text();
  })


  $('.favorites-close-icon').click(function () {
    $('.favorites').hide();
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