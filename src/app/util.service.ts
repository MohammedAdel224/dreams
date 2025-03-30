import { Clipboard } from '@angular/cdk/clipboard';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor(
        private clipboard: Clipboard,
    ) { }

    copyText(text: string){
        this.clipboard.copy(text);
    }
}
