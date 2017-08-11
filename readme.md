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

Instanciate it with any DOM element

```

var mySwiper = swipeitlikeyoumeanit(document);
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