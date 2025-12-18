"use client";

import { deleteTodo, toggleTodo } from "../actions/todo-actions";

export function TodoListContent({ todos }: { todos: Array<{ id: number; title: string; isDone: boolean }> }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span>{todo.title}</span>
                    <form action={toggleTodo.bind(null, todo.id, todo.isDone)}>
                        <input
                            type="checkbox"
                            checked={todo.isDone}
                            onChange={async () => {
                                await toggleTodo(todo.id, todo.isDone);
                            }}
                        />
                    </form>

                    <form action={deleteTodo.bind(null, todo.id)}>
                        <button type="submit">削除</button>
                    </form>
                </li>
            ))}
        </ul>
    );
}