import {Injectable} from '@angular/core';

import {User} from '../models';

@Injectable()
export class UserService {
    private users: User[] = [];

    getUsers(): User[] {
        return this.users;
    }

    getUser(id: number): User {
        return this.users.filter(user => user.id === id)[0];
    }
}
