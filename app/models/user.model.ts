import {Skill} from './skill.model';

export class User {
    private id: number;
    private password: string;
    public name: string;
    public skills: Skill[] = [];
}
