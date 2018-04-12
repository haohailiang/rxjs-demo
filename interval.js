const interval$ = Rx.Observable.interval(3000).take(3);
interval$.subscribe( 
	result => console.log(result),
	error => console.log('error'),
	() => console.log('执行完毕!')
);