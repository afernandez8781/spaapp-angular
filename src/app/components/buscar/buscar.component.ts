import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes:any = [];
  termino:string;

  constructor( private activateRoute:ActivatedRoute,
               private heroesService:HeroesService ) {}

  ngOnInit() {

    this.activateRoute.params.subscribe( params =>{
      this.termino = params['data'];
      this.heroes = this.heroesService.buscarHeroes( params['data'] );
      console.log(this.heroes);
    });

  }

}
