import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinTaxComponent } from './sin-tax.component';

describe('SinTaxComponent', () => {
  let component: SinTaxComponent;
  let fixture: ComponentFixture<SinTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
