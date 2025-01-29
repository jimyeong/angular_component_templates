import { ComponentFixture, flush, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditableTodo } from './models';


import {  HomeComponent } from './home.component';
import { TodoComponent } from './features/todo/todo.component';
import { HomeServiceTsService } from './services/home.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { fakeData } from '../../fakeData';
import { provideHttpClient } from '@angular/common/http';
import { waitForAsync, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
// reference https://stackoverflow.com/questions/74004016/unexpected-value-httptestingcontroller-imported-by-the-module-dynamictestmodu
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
describe('HomeComponentComponent', () => {
  
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: HomeServiceTsService;
  let serviceSpy: any;
  let el:DebugElement;
  beforeEach(async () => {
    let homeComponent;
    serviceSpy = jasmine.createSpyObj("HomeServiceTsService", ['addTodo', 'getTodos', 'deleteTodo', 'editTodo']);
    await TestBed.configureTestingModule({
      imports: [HomeComponent, BrowserAnimationsModule, TodoComponent],
      providers: [HomeServiceTsService, {provide: HomeServiceTsService, useValue: serviceSpy},
      ]
    })
    .compileComponents();

    // homeComponent = TestBed.createComponent(HomeComponent);
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    homeService = TestBed.inject(HomeServiceTsService);
    el = fixture.debugElement;
      
  });
  it("test addTodo.", waitForAsync(async () => {
    // when the input is empty, the todo should not be added
    serviceSpy.getTodos.and.returnValue(Promise.resolve(fakeData as EditableTodo[]))
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
    fixture.detectChanges();
    
    fixture.whenStable().then(() => {
      expect(homeService.addTodo).toHaveBeenCalled()
      const lastIdx = component.todos.length - 1
      expect(component.todos[lastIdx].title).toBe("reading books")
    })
  }))
  // when clicking the add button
  xit('test deleteTodo',  fakeAsync(() => {
    // test delete todo, add a fake data in the list
    serviceSpy.getTodos.and.returnValue(Promise.resolve([fakeData[0]] as EditableTodo[]))
    fixture.detectChanges();
    // finish the async task
    flush();
    fixture.detectChanges();

    // test whether the the first fake data's title is the same as the added data's title
    expect(component.todos.length).toBe(1);
    expect(component.todos[0].title).toBe(fakeData[0].title);
    fixture.detectChanges();

    // find the delete button and click it
    const deleteBtn = el.query(By.css('.btn__delete'));
    deleteBtn.nativeElement.click();
    flush();
    fixture.detectChanges();

    // check the item in the list with the id has disappeared
    expect(serviceSpy.deleteTodo).toHaveBeenCalled();
    expect(component.todos.length).toBe(0);
  }));
  it('test editTodo', fakeAsync(() => {
    // test edit todo, add a fake data in the list
    serviceSpy.getTodos.and.returnValue(Promise.resolve([fakeData[0]] as EditableTodo[]))
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    console.log("@@@component.todos", component.todos)
    const editId = fakeData[0].id
    fixture.detectChanges();
    const editBtn = el.query(By.css('.btn__edit'));
    editBtn.nativeElement.click();
    fixture.detectChanges();

    const input = el.query(By.css('.Todos__input'))

    expect(input.nativeElement.value).toBe(fakeData[0].title);
    input.nativeElement.value = "find a new book to read";
    input.nativeElement.dispatchEvent(new Event("input"));
    const confirmBtn = el.query(By.css('.btn__confirm')).nativeElement.click();
    console.log("@@@component.todos", component.todos)
    flush();
    fixture.detectChanges();
    expect(serviceSpy.editTodo).toHaveBeenCalled();
    flush();
    fixture.detectChanges();
    
  }))
});
