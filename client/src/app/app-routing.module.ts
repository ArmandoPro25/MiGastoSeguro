import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CreateAccountComponent } from './components/auth/create-account/create-account.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { HomeUserComponent } from './components/home/home-user/home-user.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { PrivacyPolicyComponent } from './components/docs/privacy-policy/privacy-policy.component';
import { AuthEmailComponent } from './components/auth/auth-email/auth-email.component';
import { WelcomeNewUserComponent } from './components/init/welcome-new-user/welcome-new-user.component';
import { ChangePasswordCodeComponent } from './components/auth/change-password-code/change-password-code.component';
import { ChangePassword2Component } from './components/auth/change-password-2/change-password-2.component';
import { TypeUserComponent } from './components/init/type-user/type-user.component';
import { HomeUserType1Component } from './components/home/home-user-type-1/home-user-type-1.component';
import { HomeUserType2Component } from './components/home/home-user-type-2/home-user-type-2.component';
import { PayForAccess1Component } from './components/init/pay-for-access-1/pay-for-access-1.component';
import { PayForAccess2Component } from './components/init/pay-for-access-2/pay-for-access-2.component';
import { SuccessfulPayment1Component } from './components/init/successful-payment-1/successful-payment-1.component';
import { SuccessfulPayment2Component } from './components/init/successful-payment-2/successful-payment-2.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'change-pass', component: ChangePasswordComponent },
  { path: 'home-user', component: HomeUserComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'authenticate-email', component: AuthEmailComponent },
  { path: 'welcome', component: WelcomeNewUserComponent },
  { path: 'change-pass-code', component: ChangePasswordCodeComponent },
  { path: 'change-pass-2', component: ChangePassword2Component },
  { path: 'type-user', component: TypeUserComponent },
  { path: 'home-user-type-1', component: HomeUserType1Component },
  { path: 'home-user-type-2', component: HomeUserType2Component },
  { path: 'pay-for-access-1', component: PayForAccess1Component },
  { path: 'pay-for-access-2', component: PayForAccess2Component },
  { path: 'successful-payment-1', component: SuccessfulPayment1Component },
  { path: 'successful-payment-2', component: SuccessfulPayment2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
