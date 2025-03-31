import { Clipboard } from '@angular/cdk/clipboard';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor(
        private clipboard: Clipboard,
        private http: HttpClient,
    ) { }

    copyText(text: string){
        this.clipboard.copy(text);
    }

    readFile(path: string): Observable<string>{
        return this.http.get(path, {responseType: 'text'});
    }

    cdn = {
        css: 'https://cdn.jsdelivr.net/gh/MohammedAdel224/dreams@v1.0.0/src/dreams/dist/css/dreams.min.css',
        js: 'https://cdn.jsdelivr.net/gh/MohammedAdel224/dreams@v1.0.0/src/dreams/dist/js/dreams.min.js',
    }

    convertTextToHTML(text: string){
        text = text.replaceAll('<', '&lt;');
        text = text.replaceAll('>', '&gt;');
        return text;
    }
}
