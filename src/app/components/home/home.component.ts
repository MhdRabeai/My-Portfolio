import { Component } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}
  ngOnInit(): void {
    let options = {
      strings: ['Web Developer'],
      typeSpeed: 300,
      showCursor: true,
      cursorChar: '',
      loop: false,
    };
    let typed = new Typed('#hero-typed', options);
  }
}
