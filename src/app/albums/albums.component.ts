import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "app/albums.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [AlbumsService]
})
export class AlbumsComponent implements OnInit {

  albums: any[];
  selectedAlbum: any;

  constructor(private albumsService: AlbumsService,
              private router: Router) { }

  // Selection d'un album
  onSelect(album): void {
    this.selectedAlbum = album;
  }

  // Détail d'un héro
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedAlbum.id]);
  }

  ngOnInit() {

    this.albumsService.getAlbums().subscribe(data => this.albums = data);

  }

}
