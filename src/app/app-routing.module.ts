import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotescontainerComponent } from './components/notescontainer/notescontainer.component';
import { ArchivecontainerComponent } from './components/archivecontainer/archivecontainer.component';
import { TrashcontainerComponent } from './components/trashcontainer/trashcontainer.component';
import { CreatenoteComponent } from './components/createnote/CreatenoteComponent';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
//import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes=[
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "notecard",component:NoteCardComponent},
  {path: "header",component:HeaderComponent},
 {path: "sidenav",component:SideNavComponent},
  {path: "dashboard",component:DashboardComponent,children:
  [
    {path: "notes",component:NotescontainerComponent},
    {path: "archive",component:ArchivecontainerComponent},
    {path: "trash",component:TrashcontainerComponent}
  ]
  },
  {path: "createnote",component:CreatenoteComponent}
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
