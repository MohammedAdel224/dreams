import { Component, OnInit } from '@angular/core';
import { BrandNameComponent } from '../../../brand-name/brand-name.component';
import { UtilService } from '../../../util.service';
import { CodeComponent } from '../../../code/code.component';

@Component({
    selector: 'app-download',
    imports: [ BrandNameComponent, CodeComponent ],
    templateUrl: './download.component.html',
    styleUrl: './download.component.css'
})
export class DownloadComponent implements OnInit {
    dreamsDistContent = '';

    constructor(public util: UtilService){}

    ngOnInit(): void {
        this.util.readFile('assets/dreams-dist-content.txt').subscribe({
            next: (response)=>{
                this.dreamsDistContent = response;
            },
            error: (error)=>{
                console.log('Error reading file: ', error);
            }
        });
    }
}
