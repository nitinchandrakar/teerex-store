import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectRatioImageComponent } from './aspect-ratio-image.component';

describe('AspectRatioImageComponent', () => {
  let component: AspectRatioImageComponent;
  let fixture: ComponentFixture<AspectRatioImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspectRatioImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectRatioImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
