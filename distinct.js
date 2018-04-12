const width = document.getElementById('width');

const width$ = Rx.Observable.fromEvent(width, 'keyup').pluck('target', 'value').distinct();

width$.subscribe(result => console.log('distinct 不同的输入内容为: ' + result));

// 序列中出现的值不会再出现