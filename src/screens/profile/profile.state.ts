import {useDispatch, useSelector} from 'react-redux';
import {
  editName,
  editSurname,
  changeEditMode,
  changeName,
  changeSurname,
} from '../../redux/reducers/profile/porfileReducer';
import {RootState} from '../../redux/store';
import {putData} from '../authorization/axios';
import {SERVER_ADRESS} from '../authorization/constants';
import {IForm} from './profile.types';

export const useProfileState = () => {
  const {id} = useSelector((state: RootState) => state.profile);

  const dispatch = useDispatch();

  const setName = (value: string) => {
    dispatch(editName(value));
  };
  const setSurname = (value: string) => {
    dispatch(editSurname(value));
  };
  const setEditMode = () => {
    dispatch(changeEditMode());
  };

  const setProfileData = (data: IForm) => {
    dispatch(changeName(data.name));
    dispatch(changeSurname(data.surname));
    setEditMode();
  };

  const updateUserData = async (newData: IForm) => {
    const body = {
      name: newData.name,
      surname: newData.surname,
    };
    try {
      const responce = await putData(`${SERVER_ADRESS.user}/${id}`, body);
      setProfileData(responce.data);
    } catch (error) {
      await Promise.reject(error);
    }
  };

  return {setName, setSurname, setEditMode, updateUserData};
};
