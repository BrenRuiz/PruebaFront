import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Cliente, Estado, Municipio } from '../../interfaces/customer.interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: []
})

export class CreateComponent implements OnInit {

  estados = [
    {
      id: 1,
      nombreEstado: 'Aguascalientes'
    },
    {
      id: 2,
      nombreEstado: 'Baja California'
    },
    {
      id: 3,
      nombreEstado: 'Baja California Sur'
    }
  ]

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
    //fkMunicipio: Municipio,
    codigoPostal: '',
    colonia: '',
    referencia: ''
  }

  resultado!: string;

  formAdd = new FormGroup ({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(36)]),
    apellidoP: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(36)]),
    apellidoM: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(36)]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    puesto: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(36)]),
    sucursal: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(36)]),
    rfc: new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
    nombreF: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(36)]),
    latitud: new FormControl('', [Validators.required]),
    longitud: new FormControl('', [Validators.required]),
    codigoP: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
    colonia: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(36)]),
    referencia: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(36)]),
  });

  constructor(private service:CustomerService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params
    //.subscribe(({id}) => console.log(id))
    .pipe(
      switchMap(({id}) => this.service.getById(id))
    )
    .subscribe(customer => this.customer = customer);
  }

  save(){
    
    if(this.customer.nombre.trim().length === 0) {
      return;
    }
    
    if(this.customer.id) {
      //Update Customer
      this.service.updateCustomer(this.customer)
      .subscribe(customer => console.log('Updating ', customer));
    } else {
      //New Customer
      this.service.addCustomer(this.customer)
    .subscribe(customer => {
      //console.log('Respuesta', resp);
      this.router.navigate(['update/', customer.id])
    })
    }
  }

  deleteCustomer() {
    this.service.deleteCustomer(this.customer.id!)
    .subscribe(resp => {
      this.router.navigate(['home']);
    })
  }

  salir () {
    this.router.navigate(['home']);
  }
}


