const width = document.getElementById('width');
const height = document.getElementById('height');

const width$ = Rx.Observable.of(
	{id: 1, value: 20},
	{id: 2, value: 30},
	{key:'sds', value: 'balabala'}
);
const height$ = Rx.Observable.fromEvent(height, 'keyup').map( _ => 5);

const area$ = Rx.Observable.combineLatest(width$, height$, (w, l) => w.value * l);

width$.subscribe(width => console.log('width: ' + width.value));
height$.subscribe(height => console.log('height: ' + height));

area$.subscribe(area => console.log('of最新的面积: ' + area));