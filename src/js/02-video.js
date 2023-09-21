import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds.toString());
  }, 1000)
);

window.addEventListener('DOMContentLoaded', () => {
  let savedTime = localStorage.getItem('videoplayer-current-time');

  player.setCurrentTime(parseFloat(savedTime));
});
