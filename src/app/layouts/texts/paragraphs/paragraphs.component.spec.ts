import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphsComponent } from './paragraphs.component';

describe('ParagraphsComponent', () => {
  let component: ParagraphsComponent;
  let fixture: ComponentFixture<ParagraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParagraphsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParagraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
