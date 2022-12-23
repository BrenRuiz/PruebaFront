import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { CustomerService } from '../../services/customer.service';
import { Cliente } from '../../interfaces/customer.interfaces';

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: []
})

export class CustomerInputComponent implements OnInit{
  @Output()  onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = 'Search...';

  debouncer: Subject<string> = new Subject();
  termino: string = '';
  hayError: boolean = false;
  clientes: Cliente[] = [];

  constructor(private service: CustomerService) {}

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    });

    
  }

    search(termino: string) {
      this.hayError = false;
      this.termino = termino;
  
      this.service.search(termino)
      .subscribe((clientes) => {
        this.clientes = clientes;
        
      }, (err) => {
        this.hayError = true;
        this.clientes = [];
      });
    }
  }


  

