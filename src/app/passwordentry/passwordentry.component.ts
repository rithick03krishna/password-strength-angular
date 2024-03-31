import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { dataField } from './constants';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, throwError } from 'rxjs';

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
  public words: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private httpClient: HttpClient,
  ) {
    this.route.paramMap.subscribe(() => {
      this.formData = window.history.state.data;
    });
    this.httpClient = httpClient;
  }

  handleKeyupEnter(event: any) {
    if (event.code == 'Enter') event.preventDefault();
  }

  getApi() {
    const apiRequests = [];
    for (let i = 0; i < 2; i++) {
      apiRequests.push(
        this.httpClient
          .get<string[]>('https://random-word-api.herokuapp.com/word?length=5')
          .pipe(
            catchError((error) => {
              // Handle error here,  pinging alert for user
              alert(
                'Unable to generate password for you!!! We regret for this, please try again',
              );
              return throwError(error);
            }),
          ),
      );
    }

    forkJoin(apiRequests).subscribe((responses: string[][]) => {
      // fetching data from API
      const variablesApiValues: string[] = [];
      responses.forEach((response) => {
        variablesApiValues.push(response[0]);
      });
      this.generatePassword(variablesApiValues);
    });
  }

  randomValueCheckWithDob() {
    let dob;
    this.dataComponent = this.dataService.getData();
    let randomValue = Math.floor(Math.random() * 90 + 10);
    if (this.dataComponent) {
      dob = this.dataComponent.dateOfBirth.split('/');

      if (dob.some((val) => val.includes(randomValue.toString()))) {
        this.randomValueCheckWithDob();
      }

      return randomValue;
    }
    return randomValue;
  }

  generatePassword(variablesApiValues: string[]) {
    var s = '!"$%&/=?\u{20ac}';
    const randomDOB =
      this.dataComponent !== undefined
        ? this.randomValueCheckWithDob()
        : Math.floor(Math.random() * 90 + 10);
    alert(
      variablesApiValues[0].charAt(0).toLocaleUpperCase() +
        variablesApiValues[0].slice(1) +
        randomDOB +
        variablesApiValues[1] +
        s.substr(Math.floor(s.length * Math.random()), 2),
    );
  }

  validatepass(inputvalue: string) {
    this.dataComponent = this.dataService.getData();
    if (this.dataComponent === undefined) {
      alert(
        `Please enter your details to check a password which doesn't contain your details`,
      );
      this.router.navigate(['/']);
    }
    // this.valueChecker.push(this.dataComponent.dateOfBirth.split('/'))
  }

  lengthChecker(inputvalue: string) {
    if (inputvalue.length < 8) {
      alert('Password is less than 8 characters');
    }
  }
  checkPassword(inputvalue: string) {
    this.validatepass(inputvalue);

    try {
      const dataSpliter = this.dataComponent.dateOfBirth.split('/');
      dataSpliter.push(
        this.dataComponent.firstName,
        this.dataComponent.lastName,
      );

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
    } catch {
      this.router.navigate(['/']);
    }
  }
}
