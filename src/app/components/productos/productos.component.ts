import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apiservice } from 'src/app/services/api.services';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  jsonRes:any;
  productos=[];

  constructor(
    private apiService : Apiservice,
    private router: Router
  ) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.apiService.getProducto().subscribe(
      (res) => {
        this.jsonRes = res;           
      }
    )
  }

  agregarProducto(id){
    this.productos.push(this.jsonRes[id-1])
    this.apiService.guardarCarritoDeCompras(this.productos);
  }

  navigate(){
    this.router.navigate(['carrito-de-compras'])
  }

  atras(){
    this.router.navigate(['home'])
  }

}
