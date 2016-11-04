import { Component } from 'angular2/core';

@Component({
    selector: 'angular-two',
    template: '<h2>{{someText}}</h2>'
})
export class AngularTwoComponent {
    someText:string;
    constructor() {
        this.someText = "This is an Angular 2 component!"
    }
}