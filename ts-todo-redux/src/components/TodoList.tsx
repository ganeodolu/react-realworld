import React from 'react'
import { Todo } from '../modules/todos'
import TodoItem  from './TodoItem'

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number, content: string) => void;
}

function TodoList({ todos, onToggle, onRemove, onEdit }: TodoListProps) {

  return (
    <div>
      <ul id="todo-list" className="todo-list">
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
