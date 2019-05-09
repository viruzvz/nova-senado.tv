import './styles/main.scss'
import './styles/main.less'
import $ from 'jquery'
import 'popper.js'
import 'jquery-parallax.js'
import 'bootstrap'
import 'videojs-hotkeys'
import videojs from 'video.js'
import './js/main'
import Stickyfill from 'stickyfilljs'
import './js/ytvideo'
import flatpickr from 'flatpickr'
import { Portuguese } from 'flatpickr/dist/l10n/pt.js'
import 'selectize'

$('.select-tag').selectize({
  delimiter: ',',
  persist: false,
  create: function (input) {
    return {
      value: input,
      text: input
    }
  }
})

// Focus no input quando carrega modal de busca
$('#busca-modal').on('shown.bs.modal', function () {
  $('.modalinput').trigger('focus')
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

// Flatpickr componente de data setado na página de busca
flatpickr('.flatpickr-input', {
  closeOnSelect: true,
  locale: Portuguese,
  minDate: '2017-01-01',
  mode: 'range',
  dateFormat: 'd-m-Y',
  static: false
})

// Polyfill para position:sticky funcionar no IE
var elements = $('.stickyIE')
Stickyfill.add(elements)

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

// Adiciona controle via teclado no vídeo MP4
videojs('#my-video').ready(function () {
  this.hotkeys({
    volumeStep: 0.1,
    seekStep: 5,
    enableModifiersForNumbers: false,
    enableMute: true,
    enableVolumeScroll: true
  })
})
