import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { dataField } from './constants';
import { never } from 'rxjs';

@Component({
  selector: 'app-passwordentry',
  templateUrl: './passwordentry.component.html',
  styleUrl: './passwordentry.component.scss',
})
export class PasswordentryComponent {
  formData: any;
  dataComponent: dataField = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  };
  public valueChecker = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) {
    this.route.paramMap.subscribe(() => {
      this.formData = window.history.state.data;
    });
  }
  handleKeyupEnter(event: any) {
    if (event.code == 'Enter') event.preventDefault();
  }

  validatepass(inputvalue: string) {
    this.dataComponent = this.dataService.getData();
    if (this.dataComponent === undefined) {
      alert(
        `Please enter your details to check a password which doesn't contain your details`,
      );
      this.router.navigate(['/']);
    }
    console.log(this.dataComponent);
    //  this.valueChecker.push(this.dataComponent.dateOfBirth.split('/'))
  }

  lengthChecker(inputvalue: string) {
    if (inputvalue.length < 8) {
      alert('Password is less than 8 characters');
    }
  }
  checkPassword(inputvalue: string) {
    this.validatepass(inputvalue);
    const dataSpliter = this.dataComponent.dateOfBirth.split('/');
    dataSpliter.push(this.dataComponent.firstName, this.dataComponent.lastName);

    const val = /[A-Z]/.test(inputvalue);
    const val1 = /[a-z]/.test(inputvalue);
    const val2 = /[0-9]/.test(inputvalue);
    const val3 = /[^A-Za-z0-9]/.test(inputvalue);
    const userValid = dataSpliter.some((value) =>
      inputvalue.toLowerCase().includes(value.toLowerCase()),
    );
    if (userValid) {
      alert('Password contains user details');
    } else {
      if (val && val1 && val2 && val3) {
        alert('Strong Password');
      } else if (val === false) {
        alert(`Password doesn't contain Uppercase`);
      } else if (val1 === false) {
        alert(`Password doesn't contain Lowercase`);
      } else if (val2 === false) {
        alert(`Password doesn't contain Numbers`);
      } else {
        alert(`Password doesn't contain Special Characters`);
      }
    }
  }
}
