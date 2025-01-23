import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditableTodo } from './models';


import {  HomeComponent } from './home.component';
import { TodoComponent } from './features/todo/todo.component';
import { HomeServiceTsService } from './services/home.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { fakeData } from '../../fakeData';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
describe('HomeComponentComponent', () => {
  
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: HomeServiceTsService;
  let httpTestingController: HttpTestingController;
  let serviceSpy: any;

  beforeEach(async () => {
    let homeComponent;
    // let serviceSpy = jasmine.createSpyObj('HomeServiceTsService', ['addTodo']);
    serviceSpy = jasmine.createSpyObj("HomeServiceTsService", ['addTodo', 'getTodos', 'deleteTodo']);

    await TestBed.configureTestingModule({
      imports: [HomeComponent, BrowserAnimationsModule, TodoComponent],
      providers: [HomeServiceTsService, {provide: HomeServiceTsService, useValue: serviceSpy}]
    })
    .compileComponents();

    // homeComponent = TestBed.createComponent(HomeComponent);
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    homeService = TestBed.inject(HomeServiceTsService);
    
    httpTestingController = TestBed.inject(HttpTestingController);

    // serviceSpy.getTodos.and.returnValue(Promise.resolve(fakeData as EditableTodo[]))
      
    
  });
  xit("test addTodo.", async () => {
    // when the input is empty, the todo should not be added
    const button = fixture.nativeElement.querySelector('button')
    button.click();
    fixture.detectChanges();
    // spyOn(homeService, 'addTodo');
    if(component.newTodoForm.value.title == ""){
      expect(homeService.addTodo).not.toHaveBeenCalled();
    }

    // when the input is not empty, the todo should be added
    const input = fixture.nativeElement.querySelector('input')
    input.value = "reading books"
    input.dispatchEvent(new Event("input"));
    expect(component.newTodoForm.value.title).toBe("reading books");
    fixture.detectChanges();
    button.click();
    expect(homeService.addTodo).toHaveBeenCalled()
    const req = httpTestingController.expectOne('http://localhost:8080/todos');
    expect(req.request.method).toEqual('POST');
  })
  // when clicking the add button
  it('test deleteTodo', async () => {
    
    // serviceSpy.getTodos.and.returnValue(Promise.resolve(fakeData as EditableTodo[]))
    // add testing data in the list
    component.todos=[...component.todos, fakeData[0]]
    fixture.detectChanges();
    expect(component.todos.length).toBe(1);

    // delete the testing data in the list
    const deleteId = fakeData[0].id
    component.deleteTodo(deleteId)
    fixture.detectChanges();
    expect(component.todos.length).toBe(0);
    expect(homeService.deleteTodo).toHaveBeenCalled()
    console.log("httpTestingController",httpTestingController);
    const req = httpTestingController.expectOne(`http://localhost:8080/todos/${deleteId}`);
    expect(req.request.method).toEqual('DELETE');
  });
});
