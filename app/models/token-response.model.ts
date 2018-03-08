import { User } from './user.model';

export interface TokenResponse {
    token?: string;
    user?: User;
    error?: boolean;
}
