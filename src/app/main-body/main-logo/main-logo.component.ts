import { Component } from '@angular/core';

@Component({
  selector: 'app-main-logo',
  templateUrl: './main-logo.component.html',
  styleUrls: ['./main-logo.component.scss']
})
export class MainLogoComponent {
  logoList = [
    {url : '../../../assets/images/1.png',alt : 'platinum'},
    {url : '../../../assets/images/2.png',alt : 'premium'},
    {url : '../../../assets/images/3.png',alt : 'elegant'},
    {url : '../../../assets/images/4.png',alt : 'elegant'},
    {url : '../../../assets/images/5.png',alt : 'emerald'},
  ]
}
