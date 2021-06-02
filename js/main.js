$(document).ready(function () {
  let data = JSON.parse(localStorage.getItem('favorites')) || []
  
  for (let i = 0; i < data.length; i++) {
    $('.append-new-li').prepend(`<li class="favorites-card"><img class="fav-images" src="${data[i].images}"> <span class="fav-title">${data[i].name}</span><a class="trash" href="#"><i class="far fa-trash-alt"></i></a> </li>`)
    $('.order-append').prepend(`<li class="order-card"><img class="order-images" src="${data[i].images}"><span>${data[i].name}</span></li> `)

  }
  
  $('.form-button').click(function () {
    $('.form-container').animate({
      left: '300px',
      top: '200px',
      height: 'toggle'
    }, 2000)
  })


  $('.favorites-hearth-icon').click(function () {
    let imagesAttr = $(this).parent().prev().attr('href');
    let pieceName = $(this).prev().text();
    let pieceObject = {
      images: imagesAttr,
      name: pieceName,
    }
    data.push(pieceObject);
    localStorage.setItem('favorites', JSON.stringify(data));
    $('.append-new-li').prepend(`<li class="favorites-card"><img class="fav-images" src="${pieceObject.images}"> <span class="fav-title">${pieceObject.name}</span><a class="trash" href="#"><i class="far fa-trash-alt"></i></a></li>`)

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

  $('body').on('click','.order-button', function(){
    $('.order-append').prepend(`<li class="order-card"><img class="order-images" src="${data.images}"><span>${data.name}</span></li>`)
    $('.favorites-card').remove()
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