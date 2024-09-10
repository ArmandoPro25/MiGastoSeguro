import { Component } from '@angular/core';

@Component({
  selector: 'app-pay-for-access-1',
  templateUrl: './pay-for-access-1.component.html',
  styleUrl: './pay-for-access-1.component.css'
})
export class PayForAccess1Component {
  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\s+/g, '');
    value = value.replace(/[^0-9]/gi, '');

    const formattedValue = value.match(/.{1,4}/g)?.join(' ') || '';
    input.value = formattedValue;
  }
}
