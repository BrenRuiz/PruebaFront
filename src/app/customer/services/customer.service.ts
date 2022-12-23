import { getNgModuleById, Injectable } from "@angular/core";
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Customers } from '../interfaces/customer.interfaces';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {

    private api: string = 'https://practicaits2022-production.up.railway.app';

    constructor(private http: HttpClient) {}

    getCustomers(): Observable<Customers> {
        return this.http.get<Customers>(`${this.api}/api/clientes`);
    }

    getById(id: number): Observable<Cliente> {
        return this.http.get<Cliente>(`${this.api}/api/clientes/${id}`);
    }
    
    addCustomer(customer: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(`${this.api}/api/clientes`, customer);
    }

    updateCustomer(customer: Cliente): Observable<Cliente> {
        return this.http.put<Cliente>(`${this.api}/api/clientes/${customer.id}`, customer);
    }

    deleteCustomer(id: number): Observable<any> {
        return this.http.delete<any>(`${this.api}/api/clientes/${id}`);
    }


get httpParams() {
        return new HttpParams().set('fields', 'nombre,telefono,puesto,codigoPostal');}
            
    search(termino: string): Observable<Cliente[]> {
        const url = `${this.api}/clientes/search/nombre?query=${termino}`;
        return this.http.get<Cliente[]>(url, {params: this.httpParams});}
}


