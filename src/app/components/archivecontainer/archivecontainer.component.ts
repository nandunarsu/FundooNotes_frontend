import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archivecontainer',
  templateUrl: './archivecontainer.component.html',
  styleUrls: ['./archivecontainer.component.scss']
})
export class ArchivecontainerComponent implements OnInit {
  notesList:[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
