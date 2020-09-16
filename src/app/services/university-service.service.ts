import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export interface Registry {
  registryNumber: number;
  registryDate: Date;
  studentID: number;
  studentCode: string;
  program: string;
  creditsNumber: number;
  ppa: number;
  price: number;
}

export interface Student{
  name: string;
  id: number;
  code: string;
  email: string;
  celphone: number;
  dateOfBirth: Date;
  gender: string;
}

export interface Program{
  name: string;
  programCode: number;
  verification: string;
  duration: string;
  modality: number;
}

@Injectable({
  providedIn: 'root'
})
export class UniversityServiceService {

  private registryCollection: AngularFirestoreCollection<Registry>;
  private registryDoc: AngularFirestoreDocument<Registry>;
  registries: Observable<Registry[]>;
  
  private studentsCollection: AngularFirestoreCollection<Student>;
  private studentsDoc: AngularFirestoreDocument<Student>;
  students: Observable<Student[]>;

  private programsCollection: AngularFirestoreCollection<Program>;
  private programstsDoc: AngularFirestoreDocument<Program>;
  programs: Observable<Program[]>;

  private _registry: Registry = {
    registryNumber: null,
    registryDate: null,
    studentID: null,
    studentCode: '',
    program: '',
    creditsNumber: null,
    ppa: null,
    price: null
  };

  constructor(private afs: AngularFirestore) {
    this.registryCollection = afs.collection<Registry>('Registry');
    this.registries = this.registryCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Registry;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));

    this.studentsCollection = afs.collection<Student>('Student');
    this.students = this.studentsCollection.snapshotChanges().pipe(map(actionsStudent => {
      return actionsStudent.map(b => {
        const data = b.payload.doc.data() as Student;
        const id = b.payload.doc.id;
        return { id, ...data };
      });
    }));

    this.programsCollection = afs.collection<Program>('Program');
    this.programs = this.programsCollection.snapshotChanges().pipe(map(actionsProgram => {
      return actionsProgram.map(b => {
        const data = b.payload.doc.data() as Program;
        const id = b.payload.doc.id;
        return { id, ...data };
      });
    }));

  }

  get registry()
  {
    return this._registry;
  }

  importStudentsCodeAndId(student)
  {
    this.registry.studentID = student.id;
    this.registry.studentCode = student.code;

    console.log('codigo y cedula estudiante:', this.registry);
  }

  importProgramCodeRegistry(program)
  {
    this.registry.program = program.programCode;
    console.log('codigo programa:', this.registry);
  }

  listRegistry(){
    return this.registries;
  }

  listStudents(){
    return this.students;
  }

  listPrograms(){
    return this.programs;
  }

  addNewRegistry(registry: Registry)
  {
    const newRegistry = {... registry};
    this.registryCollection.add(newRegistry);
    console.log('Matricula agregada', newRegistry);

  }

  deleteRegistry(registry){
    this.registryDoc = this.afs.doc<Registry>(`Registry/${registry.id}`);
    this.registryDoc.delete();
  }

  editRegistry(registry){
    this.registryDoc = this.afs.doc<Registry>(`Registry/${registry.id}`);
    this.registryDoc.update(registry);
  }

  searchRegistry(registryNumber){

  }

  cleanRegistry(){
    this._registry = {    
      registryNumber: null,
      registryDate: null,
      studentID: null,
      studentCode: '',
      program: '',
      creditsNumber: null,
      ppa: null,
      price: null
    }
    console.log('limpiar', this._registry);
  }

}
