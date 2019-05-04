import './styles/main.scss';
import './styles/main.less';
import $ from 'jquery';
import 'popper.js';
import parallax from 'jquery-parallax.js';
import Bootstrap from 'bootstrap';
import hotkeys from 'videojs-hotkeys';
import videojs from 'video.js';
import { main } from './js/main';
import Stickyfill from 'stickyfilljs';
var elements = $('.stickyIE');
Stickyfill.add(elements);
videojs('#my-video').ready(function() {
    this.hotkeys({
      volumeStep: 0.1,
      seekStep: 5,
      enableModifiersForNumbers: false,
      enableMute: true,
      enableVolumeScroll: true,
    });
  });