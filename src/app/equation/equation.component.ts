import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { pipe, filter, delay, scan} from 'rxjs'
import { IntegerFormControl } from '../integer-form-control';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit{

  frequenceAnswer = 0;

  ngOnInit(): void {
    this.mathForm.statusChanges
    .pipe(
      filter(value => value === 'VALID'),
      delay(100),
      scan(
        acc => {
          return {
            numberSolved: acc.numberSolved + 1,
            startTime: acc.startTime
          };
        },
        {numberSolved: 0, startTime: new Date()}
      )
    )
    .subscribe(({numberSolved, startTime})=>{
      this.frequenceAnswer = ((new Date().getTime() - startTime.getTime()) / 1000) / numberSolved;
      
      this.mathForm.setValue({
        a: this.randomNumber(),
        b: this.randomNumber(),
        answer: ''
      });

    })
  }

  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new IntegerFormControl('')
  }, [
     MathValidators.addition('answer', 'a', 'b')
  ])

  get a():number {
    return this.mathForm.value.a ? this.mathForm.value.a : 0;
  }

  get b() {
    return this.mathForm.value.b ? this.mathForm.value.b : 0;
  }

  get answer() {
    return this.mathForm.value.answer ? this.mathForm.value.answer : 0;
  }

  answerAccuracy(){
    return 1 - Math.abs((this.a + this.b - this.answer)/(this.a+this.b))
  }


  randomNumber(){
    return Math.floor(Math.random() * 10);
  }


}


