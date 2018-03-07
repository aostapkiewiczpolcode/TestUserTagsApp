///<reference path="../../node_modules/tns-core-modules/tns-core-modules.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {User} from '../models';
import {UserService} from '../services/user.service';
import {LoginService} from '../services/login.service';

@Component({
    selector: 'ns-login',
    moduleId: module.id,
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    user: User;
    isChecking: boolean;


    constructor(private loginService: LoginService,
                private userService: UserService) {
    }

    ngOnInit(): void {
        this.loginService.check().subscribe(() => {

        });
    }
}