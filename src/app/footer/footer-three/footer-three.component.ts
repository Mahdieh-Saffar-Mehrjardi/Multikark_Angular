import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-three',
  templateUrl: './footer-three.component.html',
  styleUrls: ['./footer-three.component.scss']
})
export class FooterThreeComponent {
  footerIcons = [
    { src: '../../../../../assets/images/visa.png', alt: 'Visa' },
    { src: '../../../../../assets/images/mastercard.png', alt: 'Mastercard' },
    { src: '../../../../../assets/images/paypal.png', alt: 'Paypal' },
    { src: '../../../../../assets/images/american-express.png', alt: 'American Express' },
    { src: '../../../../../assets/images/discover.png', alt: 'Discover' },
  ];
}
