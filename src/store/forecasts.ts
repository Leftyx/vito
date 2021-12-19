import { reactive, readonly } from 'vue';
import { Forecast } from '../models';

interface stateModel {
   forecasts: Forecast[];
   loading: boolean;
}

const state = reactive<stateModel>({
   forecasts: [],
   loading: false,
});

const fetchForecasts = async () : Promise<void> => {
   state.loading = true;
   return fetch('https://localhost:5001/WeatherForecast', {
      mode: 'cors',
   })
   .then((reponse: Response) => {
      return reponse.json();
   })
   .then((payload: Forecast[]) => {
      state.forecasts = payload;
      state.loading = false;
      return;
   });
};

const fetchProxyForecasts = async () : Promise<void> => {
   state.loading = true;
   return fetch('/aspnetapi/weatherforecast', {
      mode: 'cors',
   })
   .then((response: Response) => {
      if (response.status === 404) {
         throw new Error('Not Found');
      }
      return response.json();
   })
   .then((payload: Forecast[]) => {
      state.forecasts = payload;
      state.loading = false;
      return;
   }).catch((reason) => {
      console.log('Failed: ', reason);
   });
};

const useForecasts = () => ({
   state: readonly(state),
   fetchForecasts,
   fetchProxyForecasts
});

export default useForecasts;
