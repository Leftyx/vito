import { reactive, readonly } from 'vue';

export const counterStore = () => {
  const state = reactive({ counter: 0 });
  const increment = () => {
     state.counter++;
     debugger;
  };

  return { increment, state: readonly(state) };
}
