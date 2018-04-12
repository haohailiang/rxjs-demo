const width = document.getElementById('width');
const height = document.getElementById('height');

const width$ = Rx.Observable.fromEvent(width, 'keyup').pluck('target', 'value');
const height$ = Rx.Observable.fromEvent(height, 'keyup').pluck('target', 'value');
const first$ = Rx.Observable.from([1, 2, 3, 4]).startWith(0);

const combine$ = Rx.Observable.concat(first$, width$);

combine$.subscribe(result => console.log('startWith 输入内容为: ' + result));

// 相当于在流之前添加一个值