import { Component, OnInit} from '@angular/core';
import { faqModel } from './model/faq';
import { faqValues } from './model/constants';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {
  questionArray: faqModel[]=[];
  
  ngOnInit(): void {
  this.questionArray = faqValues
  }
}
