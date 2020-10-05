import React, { ChangeEvent, FormEvent, useState } from 'react'

type TodoInputProps = {
  onInput: (content: string) => void;
}

function TodoInput({ onInput }: TodoInputProps) {
  const [value, setValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    value && onInput(value)
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        id="new-todo-title"
        className="new-todo"
        value={value}
        onChange={onChange}
        placeholder="할일을 추가해주세요"
      />
    </form>
  )
}

export default TodoInput;
