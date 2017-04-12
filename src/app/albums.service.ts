import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  constructor(private http: Http) { }

  albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums';
  
  albumContent: string = 'https://jsonplaceholder.typicode.com/albums';

  getAlbums(){
    return this.http.get(this.albumsUrl).map(res => res.json());
  }

  getPhotosByAlbum(id){
    return this.http.get(`${this.albumContent}/${id}/photos`).map(res => res.json());
  }

}
