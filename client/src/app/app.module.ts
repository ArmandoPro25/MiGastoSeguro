import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { CreateAccountComponent } from './components/auth/create-account/create-account.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { HomeUserComponent } from './components/home/home-user/home-user.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { PrivacyPolicyComponent } from './components/docs/privacy-policy/privacy-policy.component';
import { AuthEmailComponent } from './components/auth/auth-email/auth-email.component';
import { WelcomeNewUserComponent } from './components/init/welcome-new-user/welcome-new-user.component';
import { UserService } from './services/user.service';
import { ChangePasswordCodeComponent } from './components/auth/change-password-code/change-password-code.component';
import { ChangePassword2Component } from './components/auth/change-password-2/change-password-2.component';
import { TypeUserComponent } from './components/init/type-user/type-user.component';
import { HomeUserType1Component } from './components/home/home-user-type-1/home-user-type-1.component';
import { HomeUserType2Component } from './components/home/home-user-type-2/home-user-type-2.component';
import { PayForAccess1Component } from './components/init/pay-for-access-1/pay-for-access-1.component';
import { PayForAccess2Component } from './components/init/pay-for-access-2/pay-for-access-2.component';
import { SuccessfulPayment1Component } from './components/init/successful-payment-1/successful-payment-1.component';
import { SuccessfulPayment2Component } from './components/init/successful-payment-2/successful-payment-2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
    ChangePasswordComponent,
    HomeUserComponent,
    MyAccountComponent,
    PrivacyPolicyComponent,
    AuthEmailComponent,
    WelcomeNewUserComponent,
    ChangePasswordCodeComponent,
    ChangePassword2Component,
    TypeUserComponent,
    HomeUserType1Component,
    HomeUserType2Component,
    PayForAccess1Component,
    PayForAccess2Component,
    SuccessfulPayment1Component,
    SuccessfulPayment2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    PasswordModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    UserService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
