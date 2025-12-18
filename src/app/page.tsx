import { TodoForm } from "@/src/features/todo/components/todo-form";
import { TodoList } from "@/src/features/todo/components/todo-list";

export default function Home() {
  return (
    <main>
      <h1>Todo</h1>
      <TodoForm />
      {/* <TodoList /> */}
    </main>
  )
}