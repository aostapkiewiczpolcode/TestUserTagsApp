import {Injectable} from '@angular/core';

import {User} from '../models';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class UserService {
    private apiDelay: 500;
    private users: User[] = [
        new User(1, 'Adam', '123456'),
        new User(2, 'Tomek', '654321')
    ];

    constructor() {
    }

    getUsers(): Observable<User[]> {
        return Observable.of(this.users).delay(this.apiDelay);
    }

    getUser(id: number): Observable<User> {
        return  Observable.of(this.users.find(user => user.id === id)).delay(this.apiDelay);
    }

    findByName(name: string): Observable<User> {
        console.log(name);
        return Observable.of(this.users.find(user => user.name === name)).delay(this.apiDelay);
    }
}
