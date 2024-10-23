import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Application, Loan } from '../../model/application.model';
@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.scss'
})
export class LoanApplicationComponent {

  application: Application = new Application();
  loan: Loan = new Loan();

  addLoan() {
    const strObj = JSON.stringify(this.loan);
    const newObj = JSON.parse(strObj)
    this.application.Loans.unshift(newObj);
    
  }
}
