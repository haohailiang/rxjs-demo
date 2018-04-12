const timer$ = Rx.Observable.timer(5000);
timer$.subscribe( result => console.log(result));