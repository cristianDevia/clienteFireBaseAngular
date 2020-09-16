import { Component, OnInit } from '@angular/core';
import { UniversityServiceService } from 'src/app/services/university-service.service';

@Component({
  selector: 'app-registries-add',
  templateUrl: './registries-add.component.html',
  styleUrls: ['./registries-add.component.css']
})
export class RegistriesAddComponent implements OnInit {

  registry = null;
    

  constructor( private connection: UniversityServiceService) { }

  ngOnInit(): void {
    this.registry = this.connection.registry;
  }

  addRegistry(){
    this.connection.addNewRegistry(this.registry);
    this.connection.cleanRegistry();
    this.registry = this.connection.registry;
  }
}
