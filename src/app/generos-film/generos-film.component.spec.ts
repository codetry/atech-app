import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosFilmComponent } from './generos-film.component';

describe('GenerosFilmComponent', () => {
  let component: GenerosFilmComponent;
  let fixture: ComponentFixture<GenerosFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerosFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerosFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
