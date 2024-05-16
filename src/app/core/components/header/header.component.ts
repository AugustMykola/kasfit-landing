import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() linkList: string[] = [];
}
