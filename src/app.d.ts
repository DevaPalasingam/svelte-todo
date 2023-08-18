// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { TodoItem } from "../src/stores/todoStore";
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
    interface TodoItem extends TodoItem {}
  }
}

export {};
