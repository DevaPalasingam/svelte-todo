<script>
  import { addTodo } from "../stores/todoStore";
  let todo = "";

  const handleSubmit = () => {
    addTodo(todo);
    todo = "";
    console.log("sumbitted");
  };
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
  <div class="flex flex-col text-sm mb-2">
    <label class="fong-bold mb-2 text-gray-800" for="todo">Todo</label>
    <input
      bind:value={todo}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      name="todo"
      placeholder="Do some pushups"
    />
  </div>
  <button
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
    type="submit">Add</button
  >
</form>
