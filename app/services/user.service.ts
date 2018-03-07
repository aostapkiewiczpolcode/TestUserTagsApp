import {Injectable} from '@angular/core';

import {User} from '../models';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
    private apiUrl: 'api/users';

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/${id}`);
    }

    findByName(name: string): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}?name=${name}`);
    }
}
