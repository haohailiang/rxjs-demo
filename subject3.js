const count$ = Rx.Observable.interval(1000).take(5);

const subject = new Rx.Subject();

const observer1 = {
	next: val => console.log('*******: next  ' + val),
	error: err => console.log('*******: err  ' + err),
	complete: () => console.log('*******: complete')
}

const observer2 = {
	next: val => console.log('2: next  ' + val),
	error: err => console.log('2: err  ' + err),
	complete: () => console.log('2: complete')
}

// count$.subscribe(v => console.log('******' + v));

subject.next(10);
subject.next(11);
subject.subscribe(observer1);

setTimeout(() => subject.subscribe(observer2), 3000);

count$.subscribe(subject);

// 这样变成直播了