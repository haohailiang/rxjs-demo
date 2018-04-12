const width = document.getElementById('width');

const width$ = Rx.Observable.fromEvent(width, 'keyup').pluck('target', 'value').distinctUntilChanged();

width$.subscribe(result => console.log('distinctUntilChanged 不同的输入内容为: ' + result));

// 只要和之前的不一样就会发射流