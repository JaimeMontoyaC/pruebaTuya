import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apiservice } from 'src/app/services/api.services';


@Component({
  selector: 'app-carrito-de-compras',
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.scss']
})
export class CarritoDeComprasComponent implements OnInit {

  jsonRes:any
  total=0;

  constructor(
    private apiService : Apiservice,
    private router: Router
  ) {}

  ngOnInit() { 
    this.jsonRes=this.apiService.obtenerCarritoDeCompras();   
    this.calcularTotal();
  }

  navigate(){
    this.router.navigate(['pagos'])
  }

  cancelar(){
    this.router.navigate(['home'])
  }

  calcularTotal(){
    for(let index = 0; index < this.jsonRes.length; index++){
      this.total = this.total+parseFloat(this.jsonRes[index].precioProducto);      
    }
  }

}
