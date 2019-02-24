import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(public database: AngularFireDatabase, private router: Router) {
        // start a loader
        database.list('login').valueChanges().subscribe(response => {
            // stop the loader
            if(response.length == 0) {
                this.router.navigateByUrl('register');
            }
        });
    }
}