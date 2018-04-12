const width = document.getElementById('width');
const height = document.getElementById('height');

const width$ = Rx.Observable.fromEvent(width, 'keyup').mapTo(2);
const height$ = Rx.Observable.fromEvent(height, 'keyup').mapTo(5);

const area$ = Rx.Observable.zip(width$, height$, (w, l) => w * l);
area$.subscribe(area => console.log('mapTo最新的面积: ' + area));