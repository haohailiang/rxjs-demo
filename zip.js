const width = document.getElementById('width');
const height = document.getElementById('height');

const width$ = Rx.Observable.fromEvent(width, 'keyup').pluck('target', 'value');
const height$ = Rx.Observable.fromEvent(height, 'keyup').pluck('target', 'value');

// const area$ = Rx.Observable.combineLatest(width$, height$, (w, l) => w * l);
const area$ = Rx.Observable.zip(width$, height$, (w, l) => w * l);
area$.subscribe(area => console.log('最新的面积: ' + area));