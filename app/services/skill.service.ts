import {Injectable} from '@angular/core';

import {Skill, User} from '../models';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class SkillService {
    public skills: Skill[] = [
        {id: 1, name: 'Java'},
        {id: 2, name: 'C++'},
        {id: 3, name: 'JS'},
        {id: 4, name: 'PHP'},
        {id: 5, name: 'Ruby'}
    ];

    constructor() {

    }

    getSkills(): Observable<Skill[]> {
        return Observable.of(this.skills);
    }

    getSkill(id: number): Observable<Skill> {
        return Observable.of(this.skills.find(skill => skill.id === id));
    }

    add(skill: Skill) {
        this.skills.push(skill);
    }
}
