import { Component, Input } from '@angular/core';
import { PageContent } from '../wikipedia.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {

  @Input()
  articles: PageContent[] = [];

}
