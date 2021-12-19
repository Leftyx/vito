import { defineComponent, ref, toRefs } from 'vue';
import useUsers from '../store/users';
// import { VTStore } from '../store/baseStore';


// type MyBoolean = true | false | 1 | 0;
// type NonNullable<T> = T extends null | undefined ? never : T;

export default defineComponent({
   name: 'MyComponent',
   components: {},
   props: {
      message: { type: String, default: '', required: false },
   },
   setup(props) {

      const { state, fetchUsers, fetchExternalUsers } = useUsers();
      // const vtStore = new VTStore<User>({} as User);
      const theMessage = ref(props.message);

      // const clickButton = () => {
      //    // alert(`${theMessage.value}`);
      //    const daUser = {} as User;
      //    vtStore.mutate('id', daUser);
      // };

      const loadUsersAsync = async () => {
         await fetchUsers();
      };

      const loadExternalUsersAsync = async () => {
         await fetchExternalUsers();
      };

      return {
         ...toRefs(state),
         loadUsersAsync,
         loadExternalUsersAsync,
      };
   },
});

