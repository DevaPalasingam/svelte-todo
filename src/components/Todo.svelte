<script>
  import { deleteTodo, toggleCompleted } from "../stores/todoStore";

  export let todo;
  export let index;
</script>

<li
  class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4"
>
  <input
    name="completed"
    type="checkbox"
    checked={todo.completed}
    on:change={() => toggleCompleted(todo.id)}
    class="mr-2 form-checkbox h-5 w-5"
  />
  <span class={`flex-1 text-gray-800 ${todo.completed ? "line-through" : ""}`}
    >{todo.text}</span
  >
  <button
    type="button"
    class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
    on:click={() => deleteTodo(todo.id)}>Delete</button
  >
</li>
