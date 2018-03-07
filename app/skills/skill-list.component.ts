import {Component, ViewChild} from '@angular/core';
import {ObservableArray} from 'tns-core-modules/data/observable-array';
import {SkillService} from '../services/skill.service';
import {TokenModel} from 'nativescript-pro-ui/autocomplete';
import {RadAutoCompleteTextViewComponent} from 'nativescript-pro-ui/autocomplete/angular';

@Component({
    moduleId: module.id,
    selector: 'skill-list',
    templateUrl: 'skill-list.component.html'
})
export class SkillListComponent {
    private _items: ObservableArray<TokenModel>;

    constructor(private skillService: SkillService) {
        this.initDataItems();
    }

    @ViewChild('autocmp') autocmp: RadAutoCompleteTextViewComponent;

    get dataItems(): ObservableArray<TokenModel> {
        return this._items;
    }

    private initDataItems() {
        this._items = new ObservableArray<TokenModel>();
        const skills = this.skillService.skills;
        for (let i = 0; i < skills.length; i++) {
            this._items.push(new TokenModel(skills[i].name, undefined));
        }

    }
}