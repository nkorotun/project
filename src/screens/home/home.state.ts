import axios from 'axios';
import {useDispatch} from 'react-redux';
import {NEWS} from '../../constants/news';
import {WEATHER} from '../../constants/weather';
import {setWeather, setNews} from '../../redux/reducers/home/homeReducer';

export const useHomeState = () => {
  const dispatch = useDispatch();

  const today = () => {
    const date = new Date();
    const day = {
      day: date.getUTCDate(),
      mouth: date.getUTCMonth(),
      year: date.getUTCFullYear(),
    };
    return `${day.year}-${day.mouth}-${day.day}`;
  };

  const loadWeather = async () => {
    try {
      const res = await axios.get(WEATHER.main, {
        params: {
          bbox: WEATHER.bbox,
          appid: WEATHER.API_KEY,
        },
      });
      dispatch(setWeather(res.data.list));
    } catch (error) {
      await Promise.reject(error);
    }
  };

  const loadNews = async () => {
    try {
      const res = await axios.get(NEWS.main, {
        params: {
          q: NEWS.query,
          from: today(),
          sortBy: NEWS.sortBy,
          apiKey: NEWS.API_KEY,
        },
      });
      dispatch(setNews(res.data.articles));
    } catch (error) {
      await Promise.reject(error);
    }
  };

  return {loadWeather, loadNews};
};
