import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchoneComponent } from './researchone.component';

describe('ResearchoneComponent', () => {
  let component: ResearchoneComponent;
  let fixture: ComponentFixture<ResearchoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
