import {Injectable} from '@angular/core';
import {TokenResponse, User, LoginRequest} from '../models';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserService} from './user.service';

@Injectable()
export class AuthService {
    private tokenName: 'access_token';
    private token: string;
    private currentUser: User;

    constructor(private userService: UserService) {
    }

    /**
     * Authenticate a user. Requires an email/password object.
     */
    public authenticate(input: LoginRequest): Observable<TokenResponse> {
        return this.userService.findByName(input.name).map(user => {
            return {token: Math.random().toString(36), user: user};
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
