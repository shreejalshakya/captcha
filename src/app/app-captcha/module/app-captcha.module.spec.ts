import { AppCaptchaModule } from './app-captcha.module';

describe('AppCaptchaModule', () => {
  let appCaptchaModule: AppCaptchaModule;

  beforeEach(() => {
    appCaptchaModule = new AppCaptchaModule();
  });

  it('should create an instance', () => {
    expect(appCaptchaModule).toBeTruthy();
  });
});
