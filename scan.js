const interval$ = Rx.Observable.interval(500)
					.scan((x, y) => {
						console.log('x: ' + x);
						console.log('y: ' + y);
						return x + y;
					}).take(10);
interval$.subscribe(
	item => console.log('最终结果: ' + item),
	err => console.log(err),
	() => console.log('执行完毕!')
);

// X就是累加器