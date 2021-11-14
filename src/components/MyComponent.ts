import { defineComponent, ref, toRefs } from 'vue';
import useUsers from '../store/users';
// import { counterStore } from '../store/counter';

// type MyBoolean = true | false | 1 | 0;
// type NonNullable<T> = T extends null | undefined ? never : T;

export default defineComponent({
   name: 'MyComponent',
   components: {},
   props: {
      message: { type: String, default: '', required: false },
   },
   setup(props) {

      const { state, fetchUsers } = useUsers();

      const theMessage = ref(props.message);

      const clickButton = () => {
         alert(`${theMessage.value}`);
      };

      const loadUsersAsync = async () => {
         await fetchUsers();
      };

      return {
         ...toRefs(state),
         clickButton,
         loadUsersAsync,
      };
   },
});

