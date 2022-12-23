import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Cliente, Customers } from '../../interfaces/customer.interfaces';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: []
})
export class UpdateComponent implements OnInit {

  customer!: Customers;

  constructor(private activedRouter: ActivatedRoute, private router: Router, private service: CustomerService) {}

  dataCostumer: Cliente[] = [];

  ngOnInit(): void {

    this.activedRouter.params
      //.subscribe(console.log);
      .subscribe(({id}) => console.log(id));
      //.pipe(
        //switchMap(({id}) => this.service.getById(id)))
      //.subscribe(customer = this.customer = customer);
  }

/****************************************************************************************************************************************/      

/*console.log(this.dataCostumer);
    let id = this.activerRouter.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getCustomer(id).subscribe(data => {
      this.dataCostumer = data[0];
      this.formUpdate.setValue({
        'id': id,
        'nombre': this.dataCostumer.nombre,
        'apellidoP': this.dataCostumer.apellidoP,
        'apellidoM': this.dataCostumer.apellidoM,
        'telefono': this.dataCostumer.telefono,
        'puesto': this.dataCostumer.puesto,
        'sucursal': this.dataCostumer.sucursal,
        'rfc': this.dataCostumer.rfc,
        'nombreF': this.dataCostumer.nombreF,
        'latitud': this.dataCostumer.latitud,
        'longitud':this.dataCostumer.longitud,
        'codigoP': this.dataCostumer.codigoP,
        'colonia': this.dataCostumer.colonia,
        'referencia': this.dataCostumer.referencia,
        'estatus': 1
      }
      );
      console.log(this.formUpdate.value);
    });
  }*/

  formUpdate = new FormGroup ({
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

  onUpdatee() {
    this.router.navigate(['updatee'])
  }
  
  salir () {
    this.router.navigate(['home']);
  }
}

    /*

  /*onUpdate(form: id) {
    this.service.updateCustomer(form)
    .subscribe(data => {
      console.log(data);
      let respuesta: Customer[] = data;
      if(respuesta.status == "ok")
    })
  }

  onUpdatee() {}

  resultado!: string;

  


onUpdate() {}


}*/
