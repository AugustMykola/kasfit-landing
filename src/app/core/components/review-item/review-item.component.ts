import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-item',
  standalone: true,
  imports: [],
  templateUrl: './review-item.component.html',
  styleUrl: './review-item.component.scss'
})
export class ReviewItemComponent {
  @Input() reviewItem: any;
}
