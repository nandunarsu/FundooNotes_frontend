import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { ARCHIVE_ICON, BRUSH_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, EDIT_ICON, IMG_ICON, MORE_ICON, NOTE_ICON, PIN_ICON, REDO_ICON, REMINDER_ICON, TICK_ICON, TRASH_ICON, UNDO_ICON } from 'src/assets/Images/svg-icons';
import { NoteserviceService } from 'src/app/services/note-service/note.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-service/data.service';
import { MatDialog } from '@angular/material/dialog';
import { EditNoteComponent } from '../edit-note/edit-note.component';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Output() updateList = new EventEmitter();
  @Input() notesData:any[]=[]
  @Input() container: string = "notes"
  archiveNotesList:[]=[];
  searchString:string=''
  subscription!:Subscription

  constructor(iconRegistry:MatIconRegistry,sanitizer:DomSanitizer,private notesService:NoteserviceService,private  dataService:DataService,private matDialog:MatDialog) { 
    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
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
    this.subscription=this.dataService.currentSearchString.subscribe(res=>this.searchString=res)
  }
  handleNoteIconsClickNote(value:any,action:string,colour?:string){
    if(action =='archive' || action =='unarchive'){

     this.notesService.archiveNotes(value.noteId).subscribe((res) => this.updateList.emit({ value,action}));
    }
    else if(action =='trash' || action == 'restore'){

      this.notesService.trashNotes(value.noteId).subscribe((res) => this.updateList.emit({ value,action}));
     }
    else{
      // this.notesService.colorApi(value.noteId).subscribe((res) => 
        this.updateList.emit({data:{...value, colour:colour},action});
    }

  }
  handleEditNote(noteData:any){
     const dialogRef = this.matDialog.open(EditNoteComponent, {data:noteData})
     dialogRef.afterClosed().subscribe(result => {this.notesService.editNoteApi(result).subscribe(res=> 
      {this.updateList.emit({data:res,action:"edit"})})});
      //console.log(result); // Pizza!
      
    
    
  }
  

}
