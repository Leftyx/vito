import { reactive, readonly } from 'vue';
import { User, ExternalUser } from '../models';

interface stateModel {
   users: User[];
   externalUsers: ExternalUser[];
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
    externalUsers: [],
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

const fetchExternalUsers = async () : Promise<void> => {
   state.loading = true;
   return fetch('/api/users')
   .then((response: Response) => {
      if (response.status === 404) {
         throw new Error('Not Found');
      }
      return response.json();
   })
   .then((payload: ExternalUser[]) => {
      state.externalUsers = payload;
      state.loading = false;
      return;
   }).catch((reason) => {
      console.log('Failed: ', reason);
   });
};

const useUsers = () => ({
   state: readonly(state),
   fetchUsers,
   addUser,
   fetchExternalUsers,
});

export default useUsers;
