import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UniversityServiceService } from './services/university-service.service';
import { RegistriesListComponent } from './components/registries-list/registries-list.component';
import { RegistriesAddComponent } from './components/registries-add/registries-add.component';
import { FormsModule } from '@angular/forms';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { ListProgramsComponent } from './components/list-programs/list-programs.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistriesListComponent,
    RegistriesAddComponent,
    ListStudentsComponent,
    ListProgramsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [UniversityServiceService, RegistriesAddComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
