import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, Customers } from '../../interfaces/customer.interfaces';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: []
})



export class ReadComponent {
  
  customers!: Customers;

  customer: Cliente = {
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    telefono: '',
    puesto: '',
    sucursal: '',
    rfc: '',
    nombreFiscal: '',
    latitud: '',
    longitud: '',
    //fkEstado: Estado.id,
    //fkMunicipio: '',
    codigoPostal: '',
    colonia: '',
    referencia: ''
  }

  constructor(private service: CustomerService, private router: Router) {}
  
  ngOnInit(): void {
    this.service.getCustomers()
    //.subscribe( resp => console.log(resp));
    .subscribe( customers => this.customers = customers);
      console.log(this.customers);
  }
  
  addCostumer() {
    this.router.navigate(['add']);
  }

  deleteCustomer(id: number) {
    this.service.deleteCustomer(this.customer.id!)
    .subscribe(resp => {
      this.router.navigate(['home']);
    })
  }
}
