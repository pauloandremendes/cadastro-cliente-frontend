import { Cliente } from '../model/cliente.model';
import { Endereco } from '../model/endereco.model';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventEmitter, Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { catchError, map } from 'rxjs/operators';
import { Page } from '../model/page.model';

@Injectable({
  providedIn: 'root',
})
export class CadastroContatosService {
  listClienteEvent = new EventEmitter<string>();

  endereco: Endereco = {};
  cliente: Cliente = { endereco: this.endereco };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  create(cadastroContato: Cliente): Observable<Cliente> {
    return this.http
      .post<Cliente>(`${environment.api}/clientes`, cadastroContato)
      .pipe(
        map((obj) => {
          this.listClienteEvent.emit('');
          return obj;
        }),
        catchError((e) => this.messageService.errorHandler(e))
      );
  }

  createEndereco(cadastroContato: Endereco): Observable<Endereco> {
    return this.http
      .post<Cliente>(`${environment.api}/enderecos`, cadastroContato)
      .pipe(
        map((obj) => {
          this.listClienteEvent.emit('');
          console.log(obj);
          return obj;
        }),
        catchError((e) => this.messageService.errorHandler(e))
      );
  }

  delete(id?: number): Observable<void> {
    return this.http.delete<void>(`${environment.api}/clientes/${id}`).pipe(
      map((obj) => {
        this.listClienteEvent.emit('');
        return obj;
      }),
      catchError((e) => this.messageService.errorHandler(e))
    );
  }

  listAll(params: HttpParams): Observable<Cliente[]> {
    return this.http
      .get<Cliente[]>(`${environment.api}/clientes`, { params })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.messageService.errorHandler(e))
      );
  }

  getContatoById(id: number) {
    return this.http.get<Cliente[]>(`${environment.api}/clientes/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.messageService.errorHandler(e))
    );
  }

  updateCliente(cliente: Cliente) {
    console.log(cliente.id)
    return this.http
      .put<Cliente>(`${environment.api}/clientes/`, cliente)
      .pipe(
        map((obj) => {
          console.log(obj);
          return obj;
        }),
        catchError((e) => this.messageService.errorHandler(e))
      );
  }
}
