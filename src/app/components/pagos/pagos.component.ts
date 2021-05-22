import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from "jquery";

interface metPago {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {

  metPagos: metPago[] = [
    {value: 'TC', viewValue: 'Tarjeta Crédito'},
    {value: 'TD', viewValue: 'Tarjeta Débito'}
  ];

  datosFormDeb = new FormGroup({
    name: new FormControl(''),
    numTarjeta: new FormControl(''),
    codigo: new FormControl('')
  });

  datosFormCred = new FormGroup({
    name: new FormControl(''),
    numTarjeta: new FormControl(''),
    codigo: new FormControl('')
  });

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  seleccionarMetodoPago(item){
    if (item.value === 'TC') {
      $("#tc").css("display","block") 
      $("#td").css("display","none") 
    }
    else{
      $("#tc").css("display","none") 
      $("#td").css("display","block") 
    }    
  }

  onSubmit(){
    this.router.navigate(['compra-exitosa'])
  }

  cancelar(){
    this.router.navigate(['home'])
  }

}
