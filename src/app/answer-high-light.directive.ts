import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { filter, map, pipe } from 'rxjs';

@Directive({
  selector: '[appAnswerHighLight]'
})
export class AnswerHighLightDirective {

  constructor(private el: ElementRef, private controlName: NgControl) {
    //console.log(this.controlName)
   }

  ngOnInit(){
    console.log(this.controlName.control);

    this.controlName.control?.parent?.valueChanges
    .pipe(map(({a, b, answer}) => Math.abs(a + b - answer) / (a + b)))
    .subscribe(value => {
      if(value <= 0.2){
        this.el.nativeElement.classList.add('close');
      }else {
        this.el.nativeElement.classList.remove('close');
      }
    })
  }


}
