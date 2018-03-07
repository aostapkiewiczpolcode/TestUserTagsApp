export class LoginRequest {
    constructor(loginRequest: LoginRequest) {
        Object.assign(this, loginRequest);
    }
    name: string;
    password: string;
}
