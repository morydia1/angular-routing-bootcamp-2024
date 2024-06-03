import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() control =  new FormControl('');
  @Input() label = '';

  showErrors(){
    const {errors, dirty, touched} = this.control;
    return errors && dirty && touched;
  }
}
