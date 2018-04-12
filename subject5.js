const count$ = Rx.Observable.interval(1000).take(5);

const subject = new Rx.ReplaySubject(2);
subject.next(10);
subject.next(11);

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

subject.subscribe(observer1);

setTimeout(() => subject.subscribe(observer2), 3000);

count$.subscribe(subject);

// 都回放一遍