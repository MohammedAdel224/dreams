import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UtilService } from '../util.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-code',
    imports: [],
    templateUrl: './code.component.html',
    styleUrl: './code.component.css'
})
export class CodeComponent {
    @Input() code = '';
    @Input() innerHTML = '';
    @Input() withContainer = true;
    @Input() class = '';
    @ViewChild('icon') icon!: ElementRef<HTMLSpanElement>

    timeoutId: NodeJS.Timeout | null = null;

    constructor(
        public util: UtilService,
        private sanitizer: DomSanitizer
    ){}

    copy(){
        if(this.timeoutId) clearTimeout(this.timeoutId);
        this.util.copyText(this.code);
        this.checkCopyIcon();
        this.timeoutId = setTimeout(()=>{
            this.uncheckCopyIcon();
            this.timeoutId = null;
        }, 5000);
    }

    checkCopyIcon(){
        this.icon.nativeElement.classList.replace('bi-clipboard', 'bi-clipboard-check');
    }

    uncheckCopyIcon(){
        this.icon.nativeElement.classList.replace('bi-clipboard-check', 'bi-clipboard');
    }

    get sanitizedInnerHTML() {
        return this.sanitizer.bypassSecurityTrustHtml(this.innerHTML);
    }
}
