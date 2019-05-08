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
var elements = $('.stickyIE')
Stickyfill.add(elements)

videojs('#my-video').ready(function () {
  this.hotkeys({
    volumeStep: 0.1,
    seekStep: 5,
    enableModifiersForNumbers: false,
    enableMute: true,
    enableVolumeScroll: true
  })
})
