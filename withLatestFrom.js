const width = document.getElementById('width');
const height = document.getElementById('height');

const width$ = Rx.Observable.fromEvent(width, 'keyup').pluck('target', 'value');
const height$ = Rx.Observable.fromEvent(height, 'keyup').pluck('target', 'value');

const combine$ = width$.withLatestFrom(height$);

combine$.subscribe(result => console.log('withLatestFrom 输入内容为: ' + result));