const interval$ = Rx.Observable.interval(500)
					.take(10)
					.reduce((x, y) => {
						console.log('x: ' + x);
						console.log('y: ' + y);
						return x + y;
					});
interval$.subscribe(
	item => console.log('最终结果: ' + item),
	err => console.log(err),
	() => console.log('执行完毕!')
);

// 跟scan一样,但是只发射最终值
