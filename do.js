const interval$ = Rx.Observable.interval(5000)
					.do(item => console.log('map前的值为: ' + item))
					.map(item => item * 2)
					.do(item => console.log('map后的值为: ' + item))
					.take(3);
interval$.subscribe(
	item => console.log('最终结果: ' + item),
	err => console.log(err),
	() => console.log('执行完毕!')
);