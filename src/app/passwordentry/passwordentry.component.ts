import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { dataField } from './constants';

@Component({
  selector: 'app-passwordentry',
  templateUrl: './passwordentry.component.html',
  styleUrl: './passwordentry.component.scss'
})
export class PasswordentryComponent{
  formData: any;
  dataComponent: dataField= {
    firstName: '',
    lastName: '',
    dateOfBirth: ''
  };
    constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.paramMap.subscribe((params) => {
      this.formData = window.history.state.data;

    });
  }

  checkPassword(inputvalue : string)
      {
     this.dataComponent =this.dataService.getData();
              
     const valueChecker=[];
     
     valueChecker.push(this.dataComponent.dateOfBirth.split('/'))
     
       const dataSpliter =  this.dataComponent.dateOfBirth.split('/');
       dataSpliter.push(this.dataComponent.firstName, this.dataComponent.lastName)
      
       const val =/[A-Z]/.test(inputvalue)
       const val1 =/[a-z]/.test(inputvalue)
       const val2 =/[0-9]/.test(inputvalue)
       const val3 = /[^A-Za-z0-9]/.test(inputvalue)
       const userValid = dataSpliter.some((value)=> inputvalue.toLowerCase().includes(value.toLowerCase()))
       if(userValid)
       {
        // this.barValue('All')
        alert('Contains user details')
       }
       else{
        if(val && val1 && val2 && val3)
        {
          alert('Strong Password')
        }
        else if(val===false){
         alert(`Password doesn't contain uppercase`);
        }
        else if(val1===false){
         alert(`Password doesn't contain lowercase`);
        }
        else if(val2===false){
         alert(`Password doesn't contain numbers`);
        }
        else{
         alert(`Password doesn't contain special characters`);
        }
       }
      }
}
