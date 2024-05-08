import { TestBed } from '@angular/core/testing';

import { NoteserviceService } from './note.service';

describe('NoteserviceService', () => {
  let service: NoteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
