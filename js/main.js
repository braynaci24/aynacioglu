$(document).ready(function () {
  let data = JSON.parse(localStorage.getItem('favorites')) || []

  for(let i = 0; i < data.length; i++){
    $('.favorites').append(`<div class="favorites-card"> <img class="fav-images" src="${data[i].images}"> <span class="">${data[i].name}</span><a class="trash" href="#"><i class="far fa-trash-alt"></i></a></div>`)
  }

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
    data = JSON.parse(localStorage.getItem('favorites')) || []
    let imagesAttr = $(this).parent().prev().attr('src');
    let pieceName = $(this).prev().text();
    let pieceObject = {
      images: imagesAttr,
      name: pieceName,
    }
    data.push(pieceObject);
    localStorage.setItem('favorites', JSON.stringify(data));
    $('.favorites').append(`<div class="favorites-card"><img class="fav-images" src="${pieceObject.images}"> <span>${pieceObject.name}</span><a class="trash" href="#"><i class="far fa-trash-alt"></i></a></div>`)
   
  })

  $('body').on('click', '.trash', function () {
    let src =  $(this).prev().prev().attr('src')
    

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