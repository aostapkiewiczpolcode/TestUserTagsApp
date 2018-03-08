///<reference path="../../node_modules/tns-core-modules/tns-core-modules.d.ts"/>
import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginRequest, TokenResponse, User} from '../models';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';
import {Page} from 'tns-core-modules/ui/page';
import {Router} from '@angular/router';
import {RouterExtensions} from 'nativescript-angular';

@Component({
    selector: 'ns-login',
    moduleId: module.id,
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    @ViewChild('name') public name;
    @ViewChild('password') public password;
    public user: User;
    public input: LoginRequest = {
        name: '',
        password: ''
    };

    constructor(private page: Page,
                private authService: AuthService,
                private routerExtensions: RouterExtensions,
                private userService: UserService) {
        page.actionBarHidden = true;
    }

    public ngOnInit() {
        console.log('LOGIN COMPONENT INIT');
    }

    public login() {
        if (this.validateForm()) {
            this.authService.authenticate(this.input).subscribe(response => {
                if (response.error) {
                    alert('Filed to log in, cannot match username and password!');
                    return;
                }
                this.user = response.user;
                this.routerExtensions.navigateByUrl('/users');
            });
        } else {
            alert('Form data is invalid!');
        }
    }

    private validateForm() {
        return (this.name.valid && this.password.valid);
    }

    public register() {
        if (this.validateForm()) {
            this.authService.register(this.input).subscribe(response => {
                if (response.error) {
                    alert('Filed to log in, user with this name exists!');
                    return;
                }
                this.user = response.user;
                this.routerExtensions.navigateByUrl('/users');
            });
        } else {
            alert('Form data is invalid!');
        }
    }
}