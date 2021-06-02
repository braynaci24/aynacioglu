$(document).ready(function () {
  let data = JSON.parse(localStorage.getItem('favorites')) || []

  for (let i = 0; i < data.length; i++) {
    $('.append-new-li').append(`<li class="favorites-card"><img class="fav-images" src="${data[i].images}"> <span class="">${data[i].name}</span><a class="trash" href="#"><i class="far fa-trash-alt"></i></a></li>`)
  }

  $('.form-button').click(function () {
    $('.form-container').animate({
      left: '300px',
      top: '200px',
      height: 'toggle'
    }, 2000)
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
    $('.append-new-li').append(`<li class="favorites-card"><img class="fav-images" src="${pieceObject.images}"> <span>${pieceObject.name}</span><a class="trash" href="#"><i class="far fa-trash-alt"></i></a></li>`)

  })

  $('body').on('click', '.trash', function () {
    let ind = $(this).parent().index();
    data.splice(ind, 1)
    localStorage.setItem('favorites', JSON.stringify(data))
    $(this).parent().remove();

  })

  $('.favorites-close-icon').click(function () {
    $('.favorites').fadeOut(400);
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