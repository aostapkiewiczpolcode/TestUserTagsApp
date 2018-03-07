import {Injectable} from '@angular/core';
import {TokenResponse, User, LoginRequest} from '../models';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    private tokenName: 'access_token';
    private token: string;
    private currentUser: User;

    constructor(private http: HttpClient) {
    }

    /**
     * Authenticate a user. Requires an email/password object.
     */
    public authenticate(form: LoginRequest): Observable<TokenResponse> {
        return this.http.get<User>(`api/users?name=${form.name}&password=${form.password}`).map((data) => {
            return {token: Math.random().toString(36), user: data}
        });
    }

    public register(form: LoginRequest): Observable<TokenResponse> {
        return null;
    }

    /**
     * Returns whether the token is valid (user is authenticated).
     */
    public valid(): boolean {
        return !!localStorage.getItem(this.tokenName)
    }

    /**
     * Retrieve the token in localStorage.
     */
    public get(): string {
        return localStorage.getItem(this.tokenName);
    }

    /**
     * Store the token in localStorage.
     *
     * @param {string} token
     */
    public store(token: string): void {
        return localStorage.setItem(this.tokenName, token);
    }

    /**
     * Destroy the token in localStorage.
     */
    public destroy(): void {
        return localStorage.removeItem(this.tokenName);
    }
}
