import { reactive, readonly } from 'vue';
import { User } from '../models';

interface stateModel {
   users: User[];
   loading: boolean;
}

const users: User[] = [
   { id: 1, firstName: 'John', lastName: 'Smith', dateOfBirth: new Date() },
   { id: 2, firstName: 'Camilla', lastName: 'Bensone', dateOfBirth: new Date() },
   { id: 3, firstName: 'Frank', lastName: 'Gambale', dateOfBirth: new Date() },
   { id: 4, firstName: 'Samantha', lastName: 'Garreth', dateOfBirth: new Date() },
];

const state = reactive<stateModel>({
    users: [],
    loading: false,
});

const addUser = async (user: User) : Promise<void> => {
   return new Promise<void>((resolve) => {
      state.users.push(user);
      resolve();
   });
};

const fetchUsers = async () => {
   state.loading = true;
   return new Promise<void>((resolve) => {
      window.setTimeout(() => {
         state.users = users;
         state.loading = false;
         resolve();
       }, 1000);
   });
};

const useUsers = () => ({
   state: readonly(state),
   fetchUsers,
   addUser,
});

export default useUsers;
