import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds.toString());
  }, 1000)
); // Throttling the saving to once per second

window.addEventListener('DOMContentLoaded', () => {
  let savedTime = localStorage.getItem('videoplayer-current-time');

  if (savedTime) {
    player
      .setCurrentTime(parseFloat(savedTime))
      .then(seconds => {
        console.log('Video seeked to: ' + seconds);
      })
      .catch(error => {
        switch (error.name) {
          case 'RangeError':
            console.error('Error: Time was out of range.');
            break;
          default:
            console.error('Error: ', error);
            break;
        }
      });
  }
});

//------------------
