import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "app/albums.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumsService]
})
export class AlbumDetailComponent implements OnInit {

  id: number;
  albumContent: any[];
  albumInfos: any = {};

  constructor(private albumsService: AlbumsService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    //récupération de l'id via l'URL
    this.id = this.route.snapshot.params['id'];

    console.log(this.albumInfos);

    //récupération des photos de l'album
    this.albumsService.getPhotosByAlbum(this.id).subscribe( data => this.albumContent = data);
    this.albumsService.getAlbumInfos(this.id).subscribe( data => {
      console.log(data);
      this.albumInfos = data;
    } );
  }


}
