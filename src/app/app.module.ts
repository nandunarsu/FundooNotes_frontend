import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReadVarExpr } from '@angular/compiler';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotescontainerComponent } from './components/notescontainer/notescontainer.component';
import { ArchivecontainerComponent } from './components/archivecontainer/archivecontainer.component';
import { TrashcontainerComponent } from './components/trashcontainer/trashcontainer.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NoteCardComponent,
    DashboardComponent,
    NotescontainerComponent,
    ArchivecontainerComponent,
    TrashcontainerComponent,
    CreatenoteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
