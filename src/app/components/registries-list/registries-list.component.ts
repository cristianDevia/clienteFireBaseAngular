import { Component, OnInit } from '@angular/core';
import { UniversityServiceService } from 'src/app/services/university-service.service';

@Component({
  selector: 'app-registries-list',
  templateUrl: './registries-list.component.html',
  styleUrls: ['./registries-list.component.css']
})
export class RegistriesListComponent implements OnInit {

  registries: any;

    editRegistry: any = {
    registryNumber: '',
    registryDate: '',
    studentID: '',
    studentCode: '',
    program: '',
    creditsNumber: '',
    ppa: '',
    price: ''
  }

  constructor(private connection: UniversityServiceService) { 
    this.connection.listRegistry().subscribe(registry => {
      this.registries = registry;
      console.log('lista:', this.registries);
    })
  }

  ngOnInit(): void {
  }

  delete(registrie)
  {
    this.connection.deleteRegistry(registrie);
  }

  edit(registrie)
  {
    this.editRegistry = registrie;
  }

  addRegistryEdited()
  {
    this.connection.editRegistry(this.editRegistry);
  }
}
