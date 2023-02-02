import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertusComponent } from './certus.component';

describe('CertusComponent', () => {
  let component: CertusComponent;
  let fixture: ComponentFixture<CertusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
