const width = document.getElementById('width');

const width$ = Rx.Observable.fromEvent(width, 'keyup').pluck('target', 'value').map(_ => Rx.Observable.interval(1000));

width$.subscribe(result => {
	result.subscribe( v => {
		console.log('输出结果为: ' + v);
	})
});

// 流进行嵌套, 交互出现