const width = document.getElementById('width');

const width$ = Rx.Observable.fromEvent(width, 'keyup').pluck('target', 'value').debounce(() => Rx.Observable.interval(5000));

width$.subscribe(result => console.log('debounce 5秒之前输入的内容为: ' + result));