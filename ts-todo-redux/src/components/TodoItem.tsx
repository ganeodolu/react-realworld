import classNames from 'classnames'
import React, { useState } from 'react'
import { Todo } from '../modules/todos'

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number, content: string) => void;
}

function TodoItem({ todo, onToggle, onRemove, onEdit }: TodoItemProps) {
  const { id, content, isCompleted } = todo
  const [value, setValue] = useState(content)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const getValue = (event.target as HTMLInputElement).value
    setValue(getValue)
  }
  const handleToggle = () => {
    onToggle(id)
  }
  const handleRemove = () => {
    onRemove(id)
  }

  const handleType = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const target = (event.target as HTMLElement)
    target.closest('li')?.classList.add('editing')
  }

  const handleEdit = (event: React.KeyboardEvent): void => {
    const target = (event.target as HTMLElement)
    const getValue = (event.target as HTMLInputElement).value
    if (event.key === 'Enter') {
      onEdit(id, getValue)
      target.closest('li')?.classList.remove('editing')
      return
    }
    if (event.key === 'Escape') {
      target.closest('li')?.classList.remove('editing')
      setValue(content)
      return
    }
  }

  return (
    <li className={classNames({ completed: isCompleted })} data-id={id}>
      <div className="view">
        <input className="toggle" type="checkbox"
          checked={isCompleted ? true : false}
          onClick={handleToggle}
          readOnly
        />
        <label className="label" onDoubleClick={(event) => handleType(event)}>{content}</label>
        <button className="destroy" onClick={handleRemove}></button>
      </div>
      <input className="edit" value={value} onChange={(event) => onChange(event)} placeholder={content} onKeyUp={(event) => handleEdit(event)} />
    </li>
  )
}

export default TodoItem
