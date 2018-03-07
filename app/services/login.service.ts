import {Injectable} from '@angular/core';
import {TokenResponse, User} from '../models';
import {Observable} from 'rxjs/Observable';
import {LoginRequest} from '../models/login-request.model';

@Injectable()
export class LoginService {
    private tokenName: 'access_token';
    private token: string;
    private currentUser: User;

    constructor(http: Http)

    /**
     * Authenticate a user. Requires an email/password object.
     */
    public authenticate(form: LoginRequest): Observable<TokenResponse> {
        return this.http
            .hostname(this.environment.api)
            .post('login', form);
    }

    /**
     * Send login check request to xcart page.
     */
    public checkXCartAuth() {
        return this.http
            .hostname(this.environment.xcart)
            .get('login/check')
    }

    /**
     * Returns whether the token is valid (user is authenticated).
     */
    public valid(): boolean {
        // Does the token even exist in localStorage?
        if (! localStorage.getItem(this.tokenName)) {
            return false;
        }

        // If the token hasn't expired, they're authenticated
        return !this.jwtHelper.isTokenExpired(localStorage.getItem(this.tokenName));
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
