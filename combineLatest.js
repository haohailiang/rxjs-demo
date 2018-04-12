const width = document.getElementById('width');
const height = document.getElementById('height');

const width$ = Rx.Observable.fromEvent(width, 'keyup').pluck('target', 'value');
const height$ = Rx.Observable.fromEvent(height, 'keyup').pluck('target', 'value');

const combine$ = Rx.Observable.combineLatest(width$, height$, (w, h) => w * h);

combine$.subscribe(result => console.log('combineLatest 输入内容为: ' + result));