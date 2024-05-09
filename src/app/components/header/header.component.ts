import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data-service/data.service';
import { LIST_VIEW_ICON, MENU_ICON, OTHER_MENU_ICON, REFRESH_ICON, SEARCH_ICON, SETTING_ICON } from 'src/assets/Images/svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  drawerState!:boolean
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private dataService:DataService) {
    iconRegistry.addSvgIconLiteral("menu-icon", sanitizer.bypassSecurityTrustHtml(MENU_ICON));
    iconRegistry.addSvgIconLiteral("refresh-icon", sanitizer.bypassSecurityTrustHtml(REFRESH_ICON));
    iconRegistry.addSvgIconLiteral("list-icon", sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON));
    iconRegistry.addSvgIconLiteral('setting-icon', sanitizer.bypassSecurityTrustHtml(SETTING_ICON));
    iconRegistry.addSvgIconLiteral('search-icon', sanitizer.bypassSecurityTrustHtml(SEARCH_ICON));
    iconRegistry.addSvgIconLiteral('apps-icon', sanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON));
  }

  ngOnInit(): void {
    this.dataService.currDrawerState.subscribe((res)=>(this.drawerState=res))
  }
  handleDrawer(){
    this.dataService.updateDrawerState(!this.drawerState);
  }

}
