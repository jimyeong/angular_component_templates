import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {  HomeComponent } from './home.component';
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
describe('HomeComponentComponent', () => {
  
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // how to test async function
  it('before fetching todos', async () => {
    expect(component.todos.length).toBe(0);
    spyOn(component.homeService, 'getTodos').and.returnValue(Promise.resolve([{
      id: '1',
      title: 'test',
      completed: false,
      createdAt: new Date(),
      isEditing: false
    }]));
    await component.ngOnInit()
    expect(component.homeService.getTodos).toHaveBeenCalled();
    expect(component.todos.length).toBe(1);
  });
  
  // typing in the todo input field
  it('typing in the input field', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'reading books';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.newTodoForm.value.title).toBe('reading books');
  });

  // when clicking the add button
  it('when clicking the add button', async () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'reading books';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    // I just want to test if the addTodo function is called
    spyOn(component.homeService, 'addTodo').and.returnValue(Promise.resolve())
    expect(component.homeService.addTodo).toHaveBeenCalled()
    
  });
  

  // how to test async function
  // it('should fetch todos', () => {
  //   component.ngOnInit();
  // });
});
