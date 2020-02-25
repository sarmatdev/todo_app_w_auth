import db from '../../firebase';

export default {
  state: {
    todos: []
  },
  mutations: {
    setTodo(state, payload) {
      state.todos = payload;
      console.log(state.todos);
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex(item => item.id == id);
      if (index >= 0) {
        state.todos.splice(index, 1);
      }
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex(item => item.id == todo.id);
      state.todos.splice(index, 1, {
        id: todo.id,
        title: todo.title,
        // completed: todo.completed
        completed: false
      });
    }
  },
  actions: {
    loadTodos({ commit }) {
      db.collection('todos')
        .get()
        .then(querySnapshot => {
          let tempTodos = [];
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              title: doc.data().title,
              completed: doc.data().completed,
              timestamp: doc.data().timestamp
            };
            tempTodos.push(data);
          });
          commit('setTodo', tempTodos);
        });
    },
    addTodo({ commit }, todo) {
      db.collection('todos')
        .add({
          title: todo.title,
          completed: false,
          timestamp: new Date()
        })
        .then(docRef => {
          commit('setTodo', {
            id: docRef.id,
            title: todo.title,
            completed: false
          });
        });
    },
    deleteTodo({ commit }, id) {
      db.collection('todos')
        .doc(id)
        .delete()
        .then(() => {
          commit('deleteTodo', id);
        });
    },
    updateTodo({ commit }, todo) {
      db.collection('todos')
        .doc(todo.id)
        .set({
          id: todo.id,
          title: todo.title,
          // completed: todo.completed,
          completed: false,
          timestamp: new Date()
        })
        .then(() => {
          commit('updateTodo', todo);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getTodoById(state, id) {
      return state.todos.filter(el => el.id === id);
    }
  }
};
