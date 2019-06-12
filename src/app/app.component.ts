import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siddhu-jenkin-karma-jasmine-app';
  answer: number;
  /* addNumber(firstnumber : number, secondnumber : number) {
    return firstnumber + secondnumber;
  } */
  addNumber(firstnumber , secondnumber) {
     console.log(firstnumber);
      console.log(secondnumber);
      var myFirstNumber = +firstnumber;
      var mySecondNumber = +secondnumber;
      this.answer = myFirstNumber + mySecondNumber;
      console.log(this.answer);      
    }
  getAnswer() {
    return this.answer;
  }

}
