import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCardListComponent } from './admin-card-list.component';

describe('AdminCardListComponent', () => {
  let component: AdminCardListComponent;
  let fixture: ComponentFixture<AdminCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
