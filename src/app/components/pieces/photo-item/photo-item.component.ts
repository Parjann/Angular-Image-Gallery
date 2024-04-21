import { Component, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Photo } from 'src/app/models/photo/photo';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css'],
})
export class PhotoItemComponent {
  imageLoaded: boolean = false;
  @ViewChildren('container') container: QueryList<ElementRef> | undefined;
  @Input() photoData: Photo = {} as Photo;
  @Output() setPhoto = new EventEmitter<Photo>();

  constructor(private renderer: Renderer2) {}

  onPhotoClicked() {
    console.log(`On Photo Clicked`);
    this.setPhoto.emit(this.photoData);
  }

  ngOnInit() {
  }

  onImageLoad() {
    console.log("Image LOaded")
    this.imageLoaded = true;
  }
}
