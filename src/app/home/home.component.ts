import { Component } from '@angular/core';
import { LoanApplicationComponent } from '../pages/loan-application/loan-application.component';
import { ApplicationListComponent } from '../pages/application-list/application-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoanApplicationComponent, ApplicationListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
