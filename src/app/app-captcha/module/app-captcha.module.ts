import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotDetectCaptchaModule } from 'angular-captcha';

import { AppCaptchaComponent } from '../app-captcha.component';

@NgModule({
  imports: [
    CommonModule,
    BotDetectCaptchaModule.forRoot({
      captchaEndpoint: 'http://localhost:9000/captcha'
    }),
  ],
  declarations: [AppCaptchaComponent],
  exports: [
    BotDetectCaptchaModule,
    AppCaptchaComponent
  ]
})
export class AppCaptchaModule { }
