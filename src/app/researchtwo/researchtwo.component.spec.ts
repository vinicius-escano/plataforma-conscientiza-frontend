import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchtwoComponent } from './researchtwo.component';

describe('ResearchtwoComponent', () => {
  let component: ResearchtwoComponent;
  let fixture: ComponentFixture<ResearchtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchtwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
