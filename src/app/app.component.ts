import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { Departamento } from 'src/shared/entities/departamento';
import { DepartamentosService } from 'src/shared/Departamentos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular9';
  listaDepartamentos: any;
  constructor(private departamentosServices: DepartamentosService) {

  }

  ngOnInit() {
    this.getPromesas();

  }
  getPromesas() {
    return new Promise((resolve, rejects) => {

      this.departamentosServices.getDepartamentos().subscribe(data => {
        if (data.length> 0) {
          this.listaDepartamentos = data;
          resolve(this.listaDepartamentos);
        }
        else{
          rejects(null);
        }
      });

    })
  }
}

