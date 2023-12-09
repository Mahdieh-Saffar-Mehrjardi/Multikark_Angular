import { Component } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent {
  sliderItem=[
    { id: 1, subtitile: 'Every Time', title: 'Mittnalier', url: '../../../assets/images/slider1.jpg' },
    { id: 2, subtitile: 'Welcome To Fashion', title: 'Men Watch', url: '../../../assets/images/slider2.jpg' },
  ]

  subtitle = 'Every Time'
  title = 'Mittnalier'
  imageurl  = '../../../assets/images/slider1.jpg'
  sliderToggle = true

  toggleHandler(){
      if (this.sliderToggle){
        this.subtitle = 'Welcome To Fashion'
        this.title = 'Men Watch'
        this.imageurl= '../../../assets/images/slider2.jpg'
        this.sliderToggle = false
      }else {
        this.subtitle = 'Every Time'
        this.title = 'Mittnalier'
        this.imageurl= '../../../assets/images/slider1.jpg'
        this.sliderToggle = true
      }
  }
}
