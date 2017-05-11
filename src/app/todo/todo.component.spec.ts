import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo when addTodo is called', () => {
    component.addTodo();
    
    expect(component.todos.length).toBeGreaterThan(0);
  });

  it('should remove a todo when removeTodo is called', () => {
    const testTodo = {
      id: 0,
      message: '',
      status: false,
      priority: 0,
      editing: false
    };
    component.removeTodo(0);

    expect(component.todos).not.toContain(testTodo);
  });

  it('should update a todo when updateTodo is called', () => {
    component.addTodo();
    const testUpdateTodo = {
      id: 0,
      message: 'aaaa',
      status: false,
      priority: 0,
      editing: false
    };

    component.updateTodo(testUpdateTodo);

    expect(component.todos[testUpdateTodo.id]).toBe(testUpdateTodo);
  });

});
