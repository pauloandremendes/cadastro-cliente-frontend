import { Cliente } from './../../../../model/cliente.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CadastroContatoRead2DataSource } from './cadastro-contato-read2-datasource';

@Component({
  selector: 'app-product-read2',
  templateUrl: './../../cadastro-contados-read2/cadastro-contados-read2/cadastro-contados-read2.component.html',
  styleUrls: ['../../cadastro-contados-read2/cadastro-contados-read2/cadastro-contados-read2.component.css']
})
export class ProductRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Cliente>;
  dataSource!: CadastroContatoRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];

  ngOnInit() {
    this.dataSource = new CadastroContatoRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
