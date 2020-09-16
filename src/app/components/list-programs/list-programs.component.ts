import { Component, OnInit } from '@angular/core';
import { UniversityServiceService } from 'src/app/services/university-service.service';

@Component({
  selector: 'app-list-programs',
  templateUrl: './list-programs.component.html',
  styleUrls: ['./list-programs.component.css']
})
export class ListProgramsComponent implements OnInit {

  programs: any;


  constructor(private connection: UniversityServiceService) { 
      this.connection.listPrograms().subscribe(program => {
      this.programs = program;
      console.log('lista:', this.programs);
    });
  }

  ngOnInit(): void {
  }

  importProgramCode(program)
  {
    this.connection.importProgramCodeRegistry(program);
  }
}
