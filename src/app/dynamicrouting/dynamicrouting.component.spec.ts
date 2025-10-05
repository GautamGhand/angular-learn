import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicroutingComponent } from './dynamicrouting.component';

describe('DynamicroutingComponent', () => {
  let component: DynamicroutingComponent;
  let fixture: ComponentFixture<DynamicroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicroutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
