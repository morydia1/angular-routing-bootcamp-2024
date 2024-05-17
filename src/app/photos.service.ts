import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse{
  urls:{
    regular: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://api.unsplash.com/photos/random';

  getPhoto(){
    return this.http.get<UnsplashResponse>(this.apiUrl, {
      headers:{
        Authorization:
           'Client-ID fcQhSO5bsjz80L2T6TS-_U8A0eZ58QGUhKjJYZwyiXk'
      }
    });
  }
}
