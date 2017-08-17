var internals = {};
var defaultSensibility;
var initial = {};

function touchstart(event) {
  initial = {
    x: event.touches[0].screenX,
    y: event.touches[0].screenY,
  };
}

function touchend(event) {
  var x = initial.x - event.changedTouches[0].screenX;
  var y = initial.y - event.changedTouches[0].screenY;
  var xAbs = Math.abs(x);
  var yAbs = Math.abs(y);

  if (xAbs > yAbs) {
    if (xAbs <= defaultSensibility) {
      return;
    } else if (x < 0) {
      internals['left'] && internals['left']();
    } else {
      internals['right'] && internals['right']();
    }
  } else {
    if (yAbs <= defaultSensibility) {
      return;
    } else if (y < 0) {
      internals['top'] && internals['top']();
    } else {
      internals['bottom'] && internals['bottom']();
    }
  }
}

function swiper(element, sensibility) {
  defaultSensibility = sensibility || 0;
  element.addEventListener('touchstart', touchstart);
  element.addEventListener('touchend', touchend)

  return {
    on(eventName, callback) {
      if (typeof callback === 'function') {
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

module.exports = swiper;
