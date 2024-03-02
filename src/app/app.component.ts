import { Component } from '@angular/core';
import { faqModel } from './faq/model/faq';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'passwordWebApp';
  questionArray: faqModel[] = [];
}
