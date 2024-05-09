import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NoteserviceService } from 'src/app/services/note-service/note.service';
import { ARCHIVE_ICON, BRUSH_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, EDIT_ICON, IMG_ICON, MORE_ICON, NOTE_ICON, PIN_ICON, REDO_ICON, REMINDER_ICON, TICK_ICON, UNDO_ICON } from 'src/assets/Images/svg-icons';


@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  createNote:boolean=true
  title:string=""
  description:string=""

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private noteService:NoteserviceService) {
    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON));
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON));
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('pin-icon', sanitizer.bypassSecurityTrustHtml(PIN_ICON));
    iconRegistry.addSvgIconLiteral('collaborator-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON));
    iconRegistry.addSvgIconLiteral('tick-icon', sanitizer.bypassSecurityTrustHtml(TICK_ICON));
    iconRegistry.addSvgIconLiteral('brush-icon', sanitizer.bypassSecurityTrustHtml(BRUSH_ICON));
    iconRegistry.addSvgIconLiteral('undo-icon', sanitizer.bypassSecurityTrustHtml(UNDO_ICON));
    iconRegistry.addSvgIconLiteral('redo-icon', sanitizer.bypassSecurityTrustHtml(REDO_ICON));
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON));
    iconRegistry.addSvgIconLiteral('backgroundcolor-icon', sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON));
    iconRegistry.addSvgIconLiteral('pin-icon', sanitizer.bypassSecurityTrustHtml(PIN_ICON));
  }


  ngOnInit(): void {
  }
  handleCreateNote(){
    this.createNote=!this.createNote;
    console.log(this.title);
    if(this.title || this.description){
      //do api call after calling this.title=" " and this.descrption=" "
      this.noteService.addNotesApi({title:this.title,description:this.description,colour:"#ffffff",isArchived:false,isDeleted:false})
      .subscribe((res)=>{this.title = ""
      this.description = ""} )
 
      
    }
  }

}
