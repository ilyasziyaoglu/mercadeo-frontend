import {Component, Input} from '@angular/core';

@Component({
    selector: 'ngx-button',
    template: `
        <button class="btn-lg w-100">{{label}} <i [class]="icon"></i></button>`,
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() icon: string;
    @Input() label: string;
}
