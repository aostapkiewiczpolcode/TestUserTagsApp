///<reference path="../../node_modules/tns-core-modules/tns-core-modules.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {LoginRequest, TokenResponse, User} from '../models';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';
import {Page} from 'tns-core-modules/ui/page';

@Component({
    selector: 'ns-login',
    moduleId: module.id,
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
   public user: User;
   public input: LoginRequest = {
        name: '',
        password: ''
    };

    constructor(private page: Page,
                private authService: AuthService,
                private userService: UserService) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
        console.log("Login Component Init");
    }

    public login() {
        console.log(JSON.stringify(this.input));
        this.authService.authenticate(this.input).subscribe(data => {
            if(data.user) {
                this.user = data.user;
            } else {
                alert('Filed to log in!');
            }
        })
    }
}