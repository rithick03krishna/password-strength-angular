import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-passwordpage',
  templateUrl: './passwordpage.component.html',
  styleUrl: './passwordpage.component.scss'
})
export class PasswordpageComponent {
 
   form: any;
   datePattern: RegExp =/^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  constructor(fb: FormBuilder, private router : Router, private dataService: DataService)
  {
   this.form =fb.group({
    firstName: ['',Validators.required],
    lastName:['',Validators.required],
    dateOfBirth:['',[Validators.required,Validators.pattern(this.datePattern)]],
   })
  }
  get details()
  {
  
    return this.form.controls;
  }

  submitData()
  {
    if (this.form.valid) {
      this.dataService.setData(this.form.value);
      this.router.navigate(['/passwordentry']);
    }
  }
  
}
