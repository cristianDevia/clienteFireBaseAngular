import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'clienteFireBaseAngular';

  Registry: Observable<any[]>;
  Student: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.Registry = db.collection('Registry').valueChanges();
    this.Student = db.collection('Student').valueChanges();
  }

}
