import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-service/data.service';
import { ARCHIVE_ICON, EDIT_ICON, NOTE_ICON, REMINDER_ICON, TRASH_ICON } from 'src/assets/Images/svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  drawerState:boolean=false
  subscription!:Subscription

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dataservice:DataService) {
    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON));
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON));
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON));
   }

  ngOnInit() {
   this.subscription= this.dataservice.currDrawerState.subscribe((res)=>(this.drawerState=res));
  }
  ngOnDestroy(){
     this.subscription.unsubscribe();
  }

}
