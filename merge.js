const width = document.getElementById('width');
const height = document.getElementById('height');

const width$ = Rx.Observable.fromEvent(width, 'keyup').pluck('target', 'value');
const height$ = Rx.Observable.fromEvent(height, 'keyup').pluck('target', 'value');

const combine$ = Rx.Observable.merge(width$, height$);

combine$.subscribe(result => console.log('combine 输入内容为: ' + result));

// 按各自的顺序叠加一个流