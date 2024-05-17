import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

interface WikipediaResponse{
  query: {
    search: PageContent[];
  };
}

export interface PageContent{
  title: string,
  wordcount: number,
  snippet: string,
  pageid: string
}[]

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://en.wikipedia.org/w/api.php';

  public search(term: string){
    return this.http.get<WikipediaResponse>(this.apiUrl,{
      params: {
        action: 'query',
        list: 'search',
        srsearch: term,
        utf8: '1',
        format: 'json',
        origin: '*'
      }
    }).pipe(
      map((value) => value.query.search)
    );
  }
}
