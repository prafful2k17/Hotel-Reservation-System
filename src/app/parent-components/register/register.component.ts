import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    password: String;

    constructor(public database: AngularFireDatabase, private router: Router) {
        // start a loader
        database.list('login').valueChanges().subscribe(response => {
            // stop the loader
            if(response.length != 0) {
                this.router.navigateByUrl('login');
            }
        });
    }

    registerUser() {
        this.database.list('login').remove().then(resp => {
            this.database.list('login').push({ password: this.password });
        })
    }
}