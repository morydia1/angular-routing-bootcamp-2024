import { Component } from '@angular/core';
import { PageContent, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootcamp-rooting';
  term: string = '';
  pages: PageContent[] = [];

  constructor(private wikiService: WikipediaService){}

  onSubmitted(term: string){
    this.wikiService.search(term).subscribe( pages => {
      this.pages = pages;
    })

  }



}
