import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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


@Injectable({
  providedIn: 'root'
})
export class UniversityServiceService {

  private registryCollection: AngularFirestoreCollection<Registry>;
  registries: Observable<Registry[]>;


  constructor(private afs: AngularFirestore) {
    this.registryCollection = afs.collection<Registry>('Registry');
    this.registries = this.registryCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Registry;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  listRegistry(){
    return this.registries;
  }

  addNewRegistry(registry: Registry)
  {
    this.registryCollection.add(registry);
  }
}
