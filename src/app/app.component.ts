import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'test-angular-captcha';

  constructor() { }

  isCaptchaCorrect(isCorrect: boolean): void {
    if (isCorrect) {
      console.log('correct');
    } else {
      console.log('in-correct');
    }
  }

}
