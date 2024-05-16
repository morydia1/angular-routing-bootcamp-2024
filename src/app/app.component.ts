import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootcamp-rooting';
  term: string = '';

  constructor(private wikiService: WikipediaService){}

  onSubmitted(term: string){
    const results: string = this.wikiService.search(term);

  }



}
