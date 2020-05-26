import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-size-select',
  templateUrl: './size-select.component.html',
  styleUrls: ['./size-select.component.scss'],
})
export class SizeSelectComponent {

  @Input() items: any = [];
  @Input() selectedItems: any = [];
  @Input() label: string;
}
