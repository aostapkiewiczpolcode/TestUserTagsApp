import {Skill} from './skill.model';

export class User {
    constructor(id: number, name: string, password: string) {
        this.id = id;
        this.name = name;
        this.password = password;
    }

    public id: number;
    public password: string;
    public name: string;
    public skills: Skill[] = [];
}
