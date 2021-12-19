import { defineComponent, ref, toRefs } from 'vue';
import useForecasts from '../store/forecasts';

export default defineComponent({
   name: 'ForecastsComponent',
   components: {},
   props: {
      message: { type: String, default: '', required: false },
   },
   setup(props) {

      const theMessage = ref(props.message);

      const { state, fetchForecasts, fetchProxyForecasts } = useForecasts();

      const loadForecastsAsync = async () => {
         // await fetchForecasts();
         await fetchProxyForecasts();
      };

      return {
         theMessage,
         ...toRefs(state),
         loadForecastsAsync,
      };
   },
});

