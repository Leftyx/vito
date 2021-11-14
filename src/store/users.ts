import { reactive, toRefs, readonly } from "vue";
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
   return new Promise<void>((resolve, reject) => {
      state.users.push(user);
      resolve();
   });
};

const fetchUsers = async () => {
   debugger;
   return new Promise<void>((resolve, reject) => {
      state.users = users;
      debugger;
      resolve();
   });
};

export default function useUsers() {
   return {
      state: readonly(state),
      fetchUsers
   }
};

