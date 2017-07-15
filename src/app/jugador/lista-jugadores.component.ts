import{Component, OnInit}from'@angular/core';
import{JugadoresService}from'../services/lista-jugadores.service';
@Component({
    selector:'app-lista-jugadores',
    templateUrl:'lista-jugadores.component.html'
})
export class ListaJugadoresComponent implements OnInit{
    jugadores:any[];
    modelo:any={
        nombre:'',
        apellido:''
    }
    constructor(private jugadoresService:JugadoresService){

    }
    ngOnInit(){
        this.getJugadores();
    }
    getJugadores(){
        this.jugadoresService.getJugadores().subscribe(
            listaJugadores=>{
                this.jugadores=listaJugadores;
            }
        )
    }
}