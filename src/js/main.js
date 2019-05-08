import $ from 'jquery'

// Adiciona scrollspy
$(document).ready(function () {
  $('body').scrollspy({
    target: '#spy',
    offset: 70
  })
  // Add smooth scrolling on all links inside the navbar
  $('.nav-item a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault()
      // Store hash
      var hash = this.hash
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({ scrollTop: $(hash).offset().top }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash
      })
    } // End if
  })
})

// Adiciona background na (navsec, componente navbar que vem antes dos cards) quando atinge a altura do sticky
var mainbottom = $('.menuStick').offset().top + $('.menuStick').height()

$(window).on('scroll', function () {
  const stop = Math.round($(window).scrollTop())
  if (stop > mainbottom) {
    $('.menuStick').addClass('sticky')
  } else {
    $('.menuStick').removeClass('sticky')
  }
})

// Botão ver mais entre os Cards
$(document).ready(function () {
  const exibirDuasLinhas = function () {
    $(this).find('.row-hidden:not(.row-flex)')
      .slice(0, 2).addClass('row-flex').fadeTo(300, 1)
  }
  $('.video-list').each(exibirDuasLinhas)
  $(document).on('click', '.show-btn', function (e) {
    e.preventDefault()
    exibirDuasLinhas.call($(this).closest('.video-list'))
    if ($(this).closest('.video-list').find('.row-hidden:not(.row-flex)').length === 0) {
      console.log('aqui')
    }
  })
})

// FOCUS NO INPUT QUANDO CARREGA MODAL
$('#busca-modal').on('shown.bs.modal', function () {
  $('.modalinput').trigger('focus')
})
