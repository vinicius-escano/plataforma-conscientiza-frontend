import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchthreeComponent } from './researchthree.component';

describe('ResearchthreeComponent', () => {
  let component: ResearchthreeComponent;
  let fixture: ComponentFixture<ResearchthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchthreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
