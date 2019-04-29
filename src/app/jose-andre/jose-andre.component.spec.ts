import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoseAndreComponent } from './jose-andre.component';

describe('JoseAndreComponent', () => {
  let component: JoseAndreComponent;
  let fixture: ComponentFixture<JoseAndreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoseAndreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoseAndreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
