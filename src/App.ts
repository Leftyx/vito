import { defineComponent } from 'vue';
import MyComponent from './components/MyComponent.vue';
import OtherComponent from './components/OtherComponent.vue';
import ForecastComponent from './components/ForecastsComponent.vue';

const environment: ImportMetaEnv = import.meta.env as ImportMetaEnv;

export default defineComponent({
   name: 'App',
   components: { MyComponent, OtherComponent, ForecastComponent },
   setup() {
      return {
         title: environment.VITE_APP_TITLE
      };
   },
});
