import { Component } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-docs',
  imports: [SidebarComponent],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css'
})
export class DocsComponent {

}
