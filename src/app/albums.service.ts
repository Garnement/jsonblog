import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  constructor(private http: Http) { }

  albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums';
  

  getAlbums(){
    return this.http.get(this.albumsUrl).map(res => res.json());
  }

  getAlbumInfos(id) {
    return this.http.get(`${this.albumsUrl}/${id}`).map(res =>{
      console.log(res.json()); return res.json();
    });

  }

  getPhotosByAlbum(id){
    return this.http.get(`${this.albumsUrl}/${id}/photos`).map(res => res.json());
  }

}
