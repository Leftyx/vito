import { defineComponent } from 'vue';
import MyComponent from './components/MyComponent.vue';
import OtherComponent from './components/OtherComponent.vue';

const environment: ImportMetaEnv = import.meta.env as ImportMetaEnv;

export default defineComponent({
   name: 'App',
   components: { MyComponent, OtherComponent },
   setup() {
      return {
         title: environment.VITE_APP_TITLE
      }
   },
});
