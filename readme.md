
# swipeitlikeyoumeanit

Detect swipe actions for top, bottom, left and right directions

## Getting Started

### Prerequisites

npm

### Installing

Download

```
npm install swipeitlikeyoumeanit
```

Import it

```
import swipeitlikeyoumeanit from 'swipeitlikeyoumeanit';
```

Instanciate it with any DOM element, and a optional number corresponding to the sensibility. (How much you must move to trigger the event.) Default to 0.

```

var mySwiper = swipeitlikeyoumeanit(document, 50);
```

Bind the callbacks

```

function left() {
}

function top() {
}

function bottom() {
}

function right() {
}

mySwiper.on('left', left);
mySwiper.on('right', right);
mySwiper.on('top', top);
mySwiper.on('bottom', bottom);
```

Unbind the callback

```

mySwiper.off('left');
```

Get rid of it

```
mySwiper.dispose();
```
