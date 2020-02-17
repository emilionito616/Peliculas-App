import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;

  constructor( public peliculasservice: PeliculasService ) {
    this.peliculasservice.getCartelera().subscribe( data => {
      console.log(data);
      this.cartelera = data;
    });

  }

  ngOnInit() {
  }

}
