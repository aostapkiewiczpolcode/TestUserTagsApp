export class Skill {
    constructor(skill: Skill) {
        Object.assign(this, skill);
    }

    public id: number;
    public name: string;
}