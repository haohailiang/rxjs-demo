const interval$ = Rx.Observable.empty();
interval$.subscribe(
	item => console.log('最终结果: ' + item),
	err => console.log(err),
	() => console.log('执行完毕!')
);