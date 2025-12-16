"use client";

import { addTodo } from "@/src/features/todo/actions/todo-actions";
import { useRef } from "react";

export function TodoForm() {
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <form
            ref={formRef}
            action={async (formData: FormData) => {
                await addTodo(formData);
                formRef.current?.reset();
            }}
        >
            <input type="text" name="title" required/>
            <button type="submit">追加</button>
        </form>
    );
}