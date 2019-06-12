import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';



describe('AppComponent', () => {

  let objCaculator = new  AppComponent();
  let result : number;

  beforeEach(() => { 
    objCaculator.addNumber(10,20);
    result= objCaculator.getAnswer();
  });

  it('Lets call addNumber', () => {   
    expect(result)
        .toEqual(30);
  });
});