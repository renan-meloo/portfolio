$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky')
    }
  })

  // ABRIR E FECHAR MENU
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active')
  })
})
