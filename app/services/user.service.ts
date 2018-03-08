import {Injectable} from '@angular/core';

import {User} from '../models';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

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
        return Observable.of(this.users);
    }

    getUser(id: number): Observable<User> {
        return  Observable.of(this.users.find(user => user.id === id));
    }

    findByName(name: string): Observable<User> {
        return Observable.of(this.users.find(user => user.name === name));
    }

    add(user: User) {
        this.users.push(user);
    }

}
