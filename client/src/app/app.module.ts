import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { CreateAccountComponent } from './components/auth/create-account/create-account.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { PrivacyPolicyComponent } from './components/docs/privacy-policy/privacy-policy.component';
import { AuthEmailComponent } from './components/auth/auth-email/auth-email.component';
import { WelcomeNewUserComponent } from './components/auth/welcome-new-user/welcome-new-user.component';
import { UserService } from './services/user.service';

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
    WelcomeNewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    PasswordModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
