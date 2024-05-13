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
import { AuthGuardService } from './services/authGuard-service/auth-guard.service';
//import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes=[
  {path:'', redirectTo:"login",pathMatch:'prefix'},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  
  {path: "dashboard",component:DashboardComponent, canActivate:[AuthGuardService], children:
  [
    {path: "notes",component:NotescontainerComponent},
    {path: "archive",component:ArchivecontainerComponent},
    {path: "trash",component:TrashcontainerComponent}
  ]
  }
  
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
