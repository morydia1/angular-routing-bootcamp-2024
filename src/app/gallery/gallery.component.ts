import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  photoUrl = '';

  constructor(private photoService: PhotosService){}

  onClick(){
    this.fethPhoto();
  }

  fethPhoto(){
    this.photoService.getPhoto().subscribe( photo => {
      this.photoUrl = photo.urls.regular;
      console.log(this.photoUrl)
    });
  }

  ngOnInit(){
    this.fethPhoto();
  }

}
