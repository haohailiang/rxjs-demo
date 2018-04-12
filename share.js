const count$ = Rx.Observable.interval(1000).share();
count$.subscribe(v => console.log('******' + v));

setTimeout(() => {
	count$.subscribe(v => console.log(v));
}, 3000);

// 参考setTimeout例子 这是直播,所有人看到的数据是一样的