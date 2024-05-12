import { Component, Input } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss'
})
export class ServiceItemComponent {
  @Input() serviceItem: any;

}
