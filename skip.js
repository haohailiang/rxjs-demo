const interval$ = Rx.Observable.interval(500)
					.do(item => console.log('filter前的值为: ' + item))
					.filter(item => item % 2 === 0)
					.do(item => console.log('filter后的值为: ' + item))
					.skip(2);
interval$.subscribe(
	item => console.log('最终结果: ' + item),
	err => console.log(err),
	() => console.log('执行完毕!')
);