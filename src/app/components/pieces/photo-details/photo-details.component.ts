import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from 'src/app/models/photo/photo';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css'],
})
export class PhotoDetailsComponent {
  @Input() photo: Photo = {} as Photo;
  ngOnInit() {
    console.log("Photo" + JSON.stringify(this.photo))
  }
}
