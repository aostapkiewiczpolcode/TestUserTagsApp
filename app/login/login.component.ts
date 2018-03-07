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
   public isChecking: boolean;
   public log: String;
   public input: LoginRequest = {
        name: '',
        password: ''
    };

    constructor(private page: Page,
                private authService: AuthService,
                private userService: UserService) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.log = 'app-started';
    }

    public async loginOrRegister() {
        this.log = 'button pressed';
        let user = await this.userService.findByName(this.input.name);
        if (user) {
            console.log(user);
            this.authService.authenticate(this.input).subscribe((token: TokenResponse) => {

            })
        } else {
            this.authService.register(this.input).subscribe((token: TokenResponse) => {

            })
        }

    }
}