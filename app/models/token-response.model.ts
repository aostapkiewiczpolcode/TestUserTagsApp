import { User } from './user.model';

export class TokenResponse {
    token: string;
    user?: User;
}
