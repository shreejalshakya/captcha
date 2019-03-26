import { Component, OnInit, Output, EventEmitter, ViewChild, Renderer2, AfterViewChecked } from '@angular/core';
import { CaptchaComponent } from 'angular-captcha';

@Component({
  selector: 'app-captcha',
  templateUrl: './app-captcha.component.html',
  styleUrls: ['./app-captcha.component.css']
})
export class AppCaptchaComponent implements OnInit, AfterViewChecked {
  @Output() isCorrect: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild(CaptchaComponent) captchaComponent: CaptchaComponent;
  captchaCode: string = null;
  errorMessage: string = null;

  constructor(private renderer: Renderer2) { }
  ngOnInit() { }
  ngAfterViewChecked(): void {
    this.removeLink();
  }

  removeLink(): void {
    const link = window.document.querySelectorAll('botdetect-captcha a[href^="//captcha.org/captcha.html?java"')[0];
    if (link) {
      this.renderer.setStyle(link, 'visibility', 'hidden');
      this.renderer.setStyle(link, 'display', 'none');
    }
  }

  /**
   * This method verify captcha code.
   * @param captchaCode This is the only parameter to validate().
   */
  validate(captchaCode: string): void {
    this.errorMessage = null;
    if (captchaCode !== null && captchaCode !== undefined && captchaCode !== '') {
      this.captchaComponent.validateUnsafe((isCaptchaCodeCorrect: boolean) => {
        if (isCaptchaCodeCorrect) {
          this.isCorrect.emit(true);
        } else {
          this.isCorrect.emit(false);
        }
      });
    } else {
      this.errorMessage = 'Please verify you are a human.';
    }
  }
}
