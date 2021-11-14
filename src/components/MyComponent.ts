import { defineComponent, ref } from 'vue';
import useTodos from '../store/users';
import { counterStore } from '../store/counter';

// type MyBoolean = true | false | 1 | 0;
// type NonNullable<T> = T extends null | undefined ? never : T;

export default defineComponent({
   name: 'my-component',
   components: {},
   props: {
      message: { type: String, default: '', required: false },
   },
   setup(props, context) {

      const { state, increment } = counterStore();

      const theMessage = ref(props.message);

      const clickButton = () => {

         alert(`${theMessage.value}`);
      };

      const doSomething = () => {
         increment();
      };

      // const loadUsers = async () => {
      //    debugger;
      //    await fetchUsers();
      // };

      return {
         // users: state.users,
         state: state,
         clickButton,
         // loadUsers,
         doSomething,
      }
   },
});

