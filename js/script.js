// Esercizio di oggi: Vue To Do List
// nome repo: vue-todolist
// Descrizione:
// Rifare l'esercizio della to do list.

// INIZIALIZZO VUE
const { createApp } = Vue;

createApp({
  data() {
    return {
      newTodos: { text: "", done: false },

      tasksToDo: [
        {
          text: "Eat",
          done: false,
        },
        {
          text: "Coding",
          done: true,
        },

        {
          text: "Sleep",
          done: false,
        },
      ],
    };
  },

  methods: {
    // MILESTONE 2
    // Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
    addTodo() {
      if (this.newTodos.text !== "") {
        this.tasksToDo.push({ ...this.newTodos });
      }
    },
  },
}).mount("#app");
