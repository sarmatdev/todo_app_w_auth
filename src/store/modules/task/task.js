import { firebaseApp } from '@/firebaseConfig.js';
import Task from './taskData';

export default {
  state: {
    tasks: []
  },
  mutations: {
    loadTasks(state, payload) {
      state.tasks.push(payload);
      console.log('Tasks commited');
      console.log(state.tasks);
    },
    setTask(state, payload) {
      state.tasks.push(payload);
      console.log(state.tasks);
    }
  },
  actions: {
    async loadTasks({ commit }) {
      try {
        const task = await firebaseApp
          .database()
          .ref('tasks')
          .once('value');

        const tasks = task.val();
        const tasksArray = [];
        Object.keys(tasks).forEach(key => {
          const i = tasks[key];
          tasksArray.push(new Task(i.title, i.description, i.user, key));
        });
        console.log('Tasks loaded');
        console.log(tasksArray);
        commit('loadTasks', tasksArray);
      } catch (error) {
        console.log(error);
      }
    },
    async newTask({ commit, getters }, payload) {
      try {
        const newTask = new Task(
          payload.title,
          payload.description,
          getters.user.id
        );

        const task = await firebaseApp
          .database()
          .ref('tasks')
          .push(newTask);

        commit('setTask', { ...newTask, id: task.key });
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    getTasks(state, getters) {
      return state.tasks.filter(task => task.user === getters.user.id);
      // return state.tasks;
    }
  }
};
