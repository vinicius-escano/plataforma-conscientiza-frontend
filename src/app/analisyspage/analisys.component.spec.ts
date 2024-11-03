import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisysComponent } from './analisys.component';

describe('AnalisysComponent', () => {
  let component: AnalisysComponent;
  let fixture: ComponentFixture<AnalisysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalisysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
