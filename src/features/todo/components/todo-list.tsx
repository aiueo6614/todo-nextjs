import { prisma } from '@/src/lib/prisma';
import { TodoListContent } from './todo-list-content';

export async function TodoList() {
    const todos = await prisma.todo.findMany({
        orderBy: { createdAt: 'desc' },
    });

    if (todos.length === 0) {
        return <p className="text-center">No todos yet!</p>;
    }

    return <TodoListContent todos={todos} />;
}