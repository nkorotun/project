import {useDispatch} from 'react-redux';
import {logOut} from '../redux/reducers';

export const useTestState = () => {
  const dispatch = useDispatch();

  const exit = () => {
    dispatch(logOut());
  };

  return {exit};
};
