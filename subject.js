const count$ = Rx.Observable.interval(1000).take(5);

const subject = new Rx.Subject();

const observer1 = {
	next: val => console.log('1: next  ' + val),
	error: err => console.log('1: err  ' + err),
	complete: () => console.log('1: complete')
}

const observer2 = {
	next: val => console.log('2: next  ' + val),
	error: err => console.log('2: err  ' + err),
	complete: () => console.log('2: complete')
}

// count$.subscribe(v => console.log('******' + v));

count$.subscribe(observer1);

setTimeout(() => count$.subscribe(observer2), 3000);