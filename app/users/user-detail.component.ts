///<reference path="../../node_modules/tns-core-modules/tns-core-modules.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models';
import {UserService} from '../services/user.service';

@Component({
    selector: 'ns-details',
    moduleId: module.id,
    templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
    user: User;

    constructor(private userService: UserService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params['id'];
        this.userService.getUser(id).subscribe(user => this.user = user);
    }
}
