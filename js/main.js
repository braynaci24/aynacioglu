$(document).ready(function () {
  var dataBase = JSON.parse(localStorage.getItem('database')) || []


  $('.form-button').click(function () {
    var _val = $('.name-input').val()
    var _val2 = $('.number-input').val()
    var _val3 = $('.message-contact').val()
    dataBase.push(_val)
    dataBase.push(_val2)
    dataBase.push(_val3)
    localStorage.setItem('database', JSON.stringify(dataBase));
  })
})