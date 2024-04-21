import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Photo } from '../../models/photo/photo';

@Injectable({
  providedIn: 'root',
})
export class ImageListService {
  constructor(private http: HttpClient) {}

  getPhotos(params: HttpParams) {
    return this.http.get<Photo[]>(
      'https://picsum.photos/v2/list?page=2&limit=100', {params}
    );
  }
}
