const count$ = Rx.Observable.interval(1000);
count$.subscribe(v => console.log('******' + v));

setTimeout(() => {
	count$.subscribe(v => console.log(v));
}, 3000);

// 这是录播, 所有人看的时候都是从头开始的