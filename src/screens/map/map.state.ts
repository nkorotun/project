import {useDispatch} from 'react-redux';
import {changeGeo} from '../../redux/reducers/map/mapReducer';

export const useMapState = () => {
  const dispatch = useDispatch();

  const setGeo = (lat: number, long: number) => {
    dispatch(changeGeo({latitude: lat, longitude: long}));
  };

  return {setGeo};
};
