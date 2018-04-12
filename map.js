const width = document.getElementById('width');
const height = document.getElementById('height');

const width$ = Rx.Observable.fromEvent(width, 'keyup').map( _ => 3);
const height$ = Rx.Observable.fromEvent(height, 'keyup').map( _ => 5);

const area$ = Rx.Observable.combineLatest(width$, height$, (w, l) => w * l);
area$.subscribe(area => console.log('map最新的面积: ' + area));