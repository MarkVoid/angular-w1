import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  info1:string='Казвам се Марк, родният ми град е Харманли'
  info2:string='Обичам разходките, видео игри с приятели и да слушам музика'
  info3:string='https://www.youtube.com/@VitaminDelicious/featured'
  info4:string='Нямам канал'

  showInfo1: boolean = false;
  showInfo2: boolean = false;
  showInfo3: boolean = false;
  showInfo4: boolean = false;

  toggleInfo1() {
    this.showInfo1 = !this.showInfo1;
  }
  toggleInfo2() {
    this.showInfo2 = !this.showInfo2;
  }
  toggleInfo3() {
    this.showInfo3 = !this.showInfo3;
  }
  toggleInfo4() {
    this.showInfo4 = !this.showInfo4;
  }
}
