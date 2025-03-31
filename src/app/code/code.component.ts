import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-code',
    imports: [],
    templateUrl: './code.component.html',
    styleUrl: './code.component.css'
})
export class CodeComponent {
    @Input() code = '';
    @Input() withContainer = true;
    @Input() class = '';
}
