import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CreateAccountComponent } from './components/auth/create-account/create-account.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { PrivacyPolicyComponent } from './components/docs/privacy-policy/privacy-policy.component';
import { AuthEmailComponent } from './components/auth/auth-email/auth-email.component';
import { WelcomeNewUserComponent } from './components/auth/welcome-new-user/welcome-new-user.component';

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
  { path: 'welcome', component: WelcomeNewUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
