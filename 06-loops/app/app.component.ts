import {Component} from '@angular/core';

@Component({
    selector: 'pizza-app',
    template: `
    <div *ngFor="let number of [1, 5, 34, 47]; let currentIndex=index">
        Aktuelle Zahl ist: {{number}} ({{currentIndex}})
    </div>
    `
})
export class PizzaAppComponent {
}
