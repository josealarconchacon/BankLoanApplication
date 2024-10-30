import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirect root path to 'home'
    { path: 'home', component: HomeComponent },
    { path: 'loan-application', component: LoanApplicationComponent },
    { path: 'login-page', component: LoginPageComponent },
    { path: 'register-page', component: RegisterPageComponent },
];