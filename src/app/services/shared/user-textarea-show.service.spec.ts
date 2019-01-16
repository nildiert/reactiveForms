import { TestBed, inject } from '@angular/core/testing';

import { UserTextareaShowService } from './user-textarea-show.service';

describe('UserTextareaShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTextareaShowService]
    });
  });

  it('should be created', inject([UserTextareaShowService], (service: UserTextareaShowService) => {
    expect(service).toBeTruthy();
  }));
});
