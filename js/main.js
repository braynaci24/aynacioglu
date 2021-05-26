$(document).ready(function () {
  let data = JSON.parse(localStorage.getItem('favorites')) || []
  let dataPieceName = JSON.parse(localStorage.getItem('piece')) || []

  for (let i = 0; i < data.length; i++) {
    $('.favorites').append(`<div class="favorites-card"><img class="fav-images" src=" ${data[i]}"><span class="b">${dataPieceName[i]}</span><i class="far fa-trash-alt trash"></i></div>`)
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
    let imagesAttr = $(this).parent().prev().attr('src');
    let pieceName = $(this).prev().text();
    dataPieceName.push(pieceName)
    data.push(imagesAttr);
    localStorage.setItem('piece', JSON.stringify(dataPieceName))
    localStorage.setItem('favorites', JSON.stringify(data))
    $('.favorites').append(`<div class="favorites-card"><img class="fav-images" src=" ${imagesAttr}"> <span>${pieceName}</span><i class="far fa-trash-alt trash"></i></div>`)
  })

  $('body').on('click', '.trash', function () {
    let srcTrash = $(this).prev().prev().attr('src');
    let textDelete = $(this).prev().text();
    let indxText = dataPieceName.indexOf(textDelete)
    let indx = data.indexOf(srcTrash);
    data.splice(indx,1 )
    dataPieceName.splice(indxText, 1)
    localStorage.setItem('favorites', JSON.stringify(data));
    localStorage.setItem('piece', JSON.stringify(dataPieceName));
    $(this).parent().remove();
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