import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ImageListService } from './services/image-list/image-list.service';
import { Photo } from './models/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular ImageGallery';
  photos: Photo[] = [];
  selectedPhoto: Photo = {} as Photo;
  page = 0;
  limit = 10;
  isApiCalling = false;
  isPageEnd = false;
  constructor(private imageService: ImageListService) {}

  ngOnInit() {
    console.log(`Ng On INit Called`);
    this.fetchData();
  }

  fetchData() {
    this.isApiCalling = true;
    const params = new HttpParams({
      fromObject: {
        page: this.page,
        limit: this.limit,
      },
    });
    this.imageService.getPhotos(params).subscribe({
      next: (value) => {
        if (value.length == 0) {
          this.isPageEnd = true;
        } else {
          this.photos = [...this.photos, ...value];
        }
      },
      error: (e) => console.error(e),
      complete: () => (this.isApiCalling = false),
    });
  }

  onScroll = () => {
    console.log('On Scrolled');
    if (!this.isApiCalling && !this.isPageEnd) {
      this.page++;
      this.fetchData();
    }
  };

  getPhotoWrapperStyle(width: number, height: number) {
    const aspectRatio = height / width;
    const columns = 3;
    const wrapperWidth = `${300 / columns}%`;
    const wrapperHeight = `${(300 / columns) * aspectRatio}%`;
  
    return {
      width: wrapperWidth,
      height: wrapperHeight,
      float: 'left' 
    };
  }
  

}
