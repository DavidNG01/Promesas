import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamento } from './entities/departamento';


@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {



  constructor (
    private http: HttpClient
  ) {
  }

  public getDepartamentos()
  {
   
   return  this.http.get<Departamento[]>("http://localhost:59846/api/Usuarios/GetDepartamentos");
  }
}
