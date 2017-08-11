const internals = {};
const sensibility = 1;
let initial = {};

function touchstart(event) {
    initial = {
      x: event.touches[0].screenX,
      y: event.touches[0].screenY,
    };
  }

function touchend(event) {
  const x = initial.x - event.changedTouches[0].screenX;
  const y = initial.y - event.changedTouches[0].screenY;
  const xAbs= Math.abs(x);
  const yAbs = Math.abs(y);

  if(xAbs >  yAbs ) {
    if(x > 0) {
      internals['left'] && internals['left']();
    } else {
      internals['right'] && internals['right']();
    }
  } else {
    if(y > 0) {
      internals['top'] && internals['top']();
    } else {
      internals['bottom'] && internals['bottom']();
    }
  }  
}

function swiper(element) {
  element.addEventListener('touchstart', touchstart);
  element.addEventListener('touchend', touchend)

  return {
    on(eventName, callback) {
      if(typeof callback === 'function') {
        internals[eventName] = callback;
      }
    },
    off(eventName) {
      delete internals[eventName];
    },
    dispose() {
      element.removeEventListener('touchstart', mouseDown);
      element.removeEventListener('touchend', mouseUp)
    }
  }
}

export default swiper;
