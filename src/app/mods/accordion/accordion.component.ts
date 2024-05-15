import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  @Input() articles: {title: string, content:string} [];
  selectedAccordion: number = 0;


  onSelectAccordion(index: number){
    if(this.selectedAccordion === index)
      this.selectedAccordion = -1;
    else
      this.selectedAccordion = index;
  }
}
