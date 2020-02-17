import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesKids: any;

  constructor( public peliculasservice: PeliculasService ) {
    this.peliculasservice.getCartelera().subscribe( data => this.cartelera = data);
    this.peliculasservice.getPopulares().subscribe( data => this.populares = data);
    this.peliculasservice.getPopularesKids().subscribe( data => this.popularesKids = data);

  }

  ngOnInit() {
  }

}
