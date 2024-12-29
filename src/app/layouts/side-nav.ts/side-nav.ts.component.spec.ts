import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavTsComponent } from './side-nav.ts.component';

describe('SideNavTsComponent', () => {
  let component: SideNavTsComponent;
  let fixture: ComponentFixture<SideNavTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavTsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNavTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
