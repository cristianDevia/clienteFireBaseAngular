import { Component, OnInit } from '@angular/core';
import { UniversityServiceService } from 'src/app/services/university-service.service';
import { RegistriesListComponent } from '../registries-list/registries-list.component';
import { RegistriesAddComponent } from '../registries-add/registries-add.component';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  students: any;

  constructor(private connection: UniversityServiceService) {
    this.connection.listStudents().subscribe(student => {
      this.students = student;
      console.log('lista:', this.students);
    });
   }

  ngOnInit(): void {
  }

  importStudentCode(student)
  {
    this.connection.importStudentsCodeAndId(student);
  }

}
