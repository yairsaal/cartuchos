import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersConfirmedComponent } from './players-confirmed.component';

describe('PlayersConfirmedComponent', () => {
  let component: PlayersConfirmedComponent;
  let fixture: ComponentFixture<PlayersConfirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersConfirmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
