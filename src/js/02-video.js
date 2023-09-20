import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

document.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
});

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
  }, 1000)
);
