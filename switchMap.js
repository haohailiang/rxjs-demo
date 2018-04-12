const width = document.getElementById('width');

const width$ = Rx.Observable.fromEvent(width, 'keyup').pluck('target', 'value').switchMap(_ => Rx.Observable.interval(1000));

width$.subscribe(result => {
	console.log('flatMap输出结果为: ' + result);
});

// 这是个开关,会关闭之前的流