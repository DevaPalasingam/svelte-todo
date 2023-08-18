<script>
  import TodoForm from "../components/TodoForm.svelte";
  import { todos } from "../stores/todoStore";
  import Todo from "../components/Todo.svelte";
</script>

<main>
  <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">
    Todo List
  </h1>
  <TodoForm />
  {#each $todos as todo, index (todo.id)}
    <Todo {todo} {index} />
  {/each}
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
