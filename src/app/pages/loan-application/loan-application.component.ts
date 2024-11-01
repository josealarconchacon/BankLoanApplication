import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ApiResponseModel,
  Application,
  Loan,
} from '../../model/application.model';
import { MainService } from '../../service/main.service';
@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.scss',
})
export class LoanApplicationComponent {
  application: Application = new Application();
  loan: Loan = new Loan();

  masterService = inject(MainService);

  addLoan() {
    const strObj = JSON.stringify(this.loan);
    const newObj = JSON.parse(strObj);
    this.application.Loans.unshift(newObj);
  }

  onSubmit() {
    this.masterService.addNewApplication(this.application).subscribe(
      (Result: ApiResponseModel) => {
        if (Result.result) {
          alert('Loan Application Success');
          this.updateLoanTable();
        } else {
          alert(Result.message);
        }
      },
      (error) => {
        alert(error);
      }
    );
  }
  updateLoanTable() {
    this.application.Loans.unshift(this.loan);
  }
}
