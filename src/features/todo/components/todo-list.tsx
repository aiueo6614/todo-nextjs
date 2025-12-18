import { prisma } from '@/src/lib/prisma';
import { deleteTodo, toggleTodo } from '../actions/todo-actions';

export async function TodoList() {
    const todos = await prisma.todo.findMany({
        orderBy: { createdAt: 'desc' },
    });

    if (todos.length === 0) {
        return <p className="text-center">No todos yet!</p>;
    }

    return (
        <ul>
            {todos.map((todo) => (
                <li>
                    <span>{todo.title}</span>
                    <form action={toggleTodo.bind(null, todo.id, todo.isDone)}>
                        <input
                            type="checkbox"
                            checked={todo.isDone}
                            onChange={() => { }}
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