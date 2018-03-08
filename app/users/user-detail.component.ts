import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Skill, User} from '../models';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';


@Component({
    selector: 'ns-details',
    moduleId: module.id,
    templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
    public user: User;
    public editEnabled: boolean = false;
    public newSkill: Skill = new Skill({
        id: new Date().valueOf(),
        name: ''
    });

    constructor(private authService: AuthService,
                private userService: UserService,
                private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        const id = +this.route.snapshot.params['id'];
        this.userService.getUser(id).subscribe(user => {
            this.user = user;
            alert(JSON.stringify(user.skills));
            if (this.authService.getCurrentUser().id === user.id) {
                this.editEnabled = true;
            }
        });
    }

    public selectSkill(event) {
        this.newSkill.name = event.skillName;
    }

    public addSkill() {
        if (!this.newSkill.name) {
            alert('Wrong skill name!');
        }
        this.user.skills.push(new Skill(this.newSkill));
        this.newSkill.id = new Date().valueOf();
        this.newSkill.name = '';
    }

    public removeSkill(id) {
        const arrayId = this.user.skills.findIndex(user => user.id === id);
        this.user.skills.splice(arrayId, 1);
    }
}
