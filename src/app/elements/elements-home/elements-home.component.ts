import { Component } from '@angular/core';
import { fa, th } from '@faker-js/faker';

@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.css']
})
export class ElementsHomeComponent {

  showModal:boolean = false;
  load: boolean = false;

  onAdd(){
    this.showModal = !this.showModal
  }

  onLoad(){
    this.load = !this.load;
  }

  
}
