import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class Apiservice{

    carritoDeComprasLista:any;

    constructor(
        private http: HttpClient
    ){}

    public getProducto(){
        return this.http.get(`https://60a8746120a6410017305c5a.mockapi.io/ApiPruebaTuya/Productos/`)
    }

    public guardarCarritoDeCompras(listaCompras){
        this.carritoDeComprasLista=listaCompras;
    }

    public obtenerCarritoDeCompras(){
        return this.carritoDeComprasLista;
    }
    
}