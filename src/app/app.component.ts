import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  title = 'ngc-firebase-workshop';

  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.afAuth.user.pipe(takeUntil(this.destroy$)).subscribe(console.log);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe();
  }
}
