///<reference path="../../node_modules/tns-core-modules/tns-core-modules.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'ns-items',
    moduleId: module.id,
    templateUrl: './user.component.html',
})
export class UsersComponent implements OnInit {
    users: User[];
    currentUser: User;

    constructor(
        private authService: AuthService,
        private userService: UserService) {
        this.currentUser = authService.getCurrentUser();
    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe((users) => {
            this.users = users;
        })
    }
}