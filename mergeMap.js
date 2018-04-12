const width = document.getElementById('width');

const width$ = Rx.Observable.fromEvent(width, 'keyup').pluck('target', 'value').mergeMap(_ => Rx.Observable.interval(1000));

width$.subscribe(result => {
	console.log('flatMap输出结果为: ' + result);
});

// 2个流合并成一个流