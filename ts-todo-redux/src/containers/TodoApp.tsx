import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { RootState } from '../modules';
import { addTodo, editTodo, removeTodo, toggleTodo } from '../modules/todos';

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()

  const onInput = (content: string) => {
    dispatch(addTodo(content))
  };

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id))
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo(id))
  };

  const onEdit = (id: number, content: string) => {
    dispatch(editTodo(id, content))
  }

  return (
    <div className="todoapp">
      <TodoInput onInput={onInput} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} onEdit={onEdit} />
    </div>
  )
}

export default TodoApp
