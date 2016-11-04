import {Component} from 'angular2/core';
import {AngularTwoComponent} from '../ng2-directive/angular-two.directive';
import {adapter} from '../adapter';

@Component({
    selector: 'angular-two-one',
    template: '<angular-one></angular-one><angular-two></angular-two>',
    directives: [adapter.upgradeNg1Component('angularOne'), AngularTwoComponent]
})
export class AngularTwoOneComponent {
    constructor(){
    }
}
