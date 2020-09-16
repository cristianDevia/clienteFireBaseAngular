import { Component, OnInit } from '@angular/core';
import { UniversityServiceService } from 'src/app/services/university-service.service';

@Component({
  selector: 'app-registries-add',
  templateUrl: './registries-add.component.html',
  styleUrls: ['./registries-add.component.css']
})
export class RegistriesAddComponent implements OnInit {

  registry: any = {
    registryNumber: '',
    registryDate: '',
    studentID: '',
    studentCode: '',
    program: '',
    creditsNumber: '',
    ppa: '',
    price: ''
  }

  constructor( private connection: UniversityServiceService) { }

  ngOnInit(): void {
  }

  addRegistry(){
    this.connection.addNewRegistry(this.registry);
  }

}
