import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFolkComponent } from './add-folk.component';

describe('AddFolkComponent', () => {
  let component: AddFolkComponent;
  let fixture: ComponentFixture<AddFolkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFolkComponent]
    });
    fixture = TestBed.createComponent(AddFolkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
