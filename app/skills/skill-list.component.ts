import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ObservableArray} from 'tns-core-modules/data/observable-array';
import {SkillService} from '../services/skill.service';
import {TokenModel} from 'nativescript-ui-autocomplete';
import {Skill} from '../models';

@Component({
    moduleId: module.id,
    selector: 'skill-list',
    templateUrl: 'skill-list.component.html'
})
export class SkillListComponent {
    private _items: ObservableArray<TokenModel>;
    @Input() private selectedSkills: Skill[];
    @Input() private editEnabled: boolean;
    @Output() public skillWasAdded: EventEmitter<Skill> = new EventEmitter<Skill>();
    @Output() public skillWasRemoved: EventEmitter<Skill> = new EventEmitter<Skill>();

    public onTokenAdded(args) {
        const skill = this.findSkillByName(args.token.text);
        this.selectedSkills.push(skill);
        this.skillWasAdded.emit(skill);
    }

    public onTokenRemoved(args) {
        const skill = this.findSkillByName(args.token.text);
        const index = this.selectedSkills.indexOf(skill);
        this.selectedSkills.splice(index, 1);
        this.skillWasRemoved.emit(skill);
    }

    constructor(private skillService: SkillService) {
        this.initDataItems();
    }

    get dataItems(): ObservableArray<TokenModel> {
        return this._items;
    }

    private findSkillByName(name) {
        return this.selectedSkills.find(skill => skill.name === name);
    }

    private initDataItems() {
        this._items = new ObservableArray<TokenModel>();
        this.skillService.getSkills().subscribe(skills => {
            for (let i = 0; i < skills.length; i++) {
                const token = new TokenModel(skills[i].name, undefined);
                this._items.push(token);
            }
        });
    }
}