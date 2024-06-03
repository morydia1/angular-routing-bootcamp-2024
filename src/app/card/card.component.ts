import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() name: string | null = '';
  @Input() cardNumber: string | null = '';
  @Input() expiration: string | null = '';
}
