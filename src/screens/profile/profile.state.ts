import {useDispatch, useSelector} from 'react-redux';
import {
  changeEditMode,
  changeName,
  changeSurname,
  setPhoto,
} from '../../redux/reducers/profile/porfileReducer';
import {RootState} from '../../redux/store';
import {getData, putData} from '../authorization/axios';
import {SERVER_ADRESS} from '../../constants/auth';
import {IForm} from './profile.types';

export const useProfileState = () => {
  const {id} = useSelector((state: RootState) => state.profile);

  const dispatch = useDispatch();

  const setEditMode = () => {
    dispatch(changeEditMode());
  };

  const setProfileData = (data: IForm) => {
    dispatch(changeName(data.name));
    dispatch(changeSurname(data.surname));
  };

  const setAvatar = (image: string) => {
    dispatch(setPhoto(image));
  };

  const updateUserAvatar = async (photo: string) => {
    const body = {
      image: photo,
    };
    try {
      const responce = await putData(`${SERVER_ADRESS.user}/${id}`, body);
      setAvatar(responce.data.image);
    } catch (error) {
      await Promise.reject(error);
    }
  };

  const updateUserData = async (newData: IForm) => {
    const body = {
      name: newData.name,
      surname: newData.surname,
    };
    try {
      const responce = await putData(`${SERVER_ADRESS.user}/${id}`, body);
      setProfileData(responce.data);
      setEditMode();
    } catch (error) {
      await Promise.reject(error);
    }
  };
  const checkData = async () => {
    try {
      const responce = await getData(`${SERVER_ADRESS.user}/${id}`, '');
      setProfileData(responce.data);
      setAvatar(responce.data.image);
    } catch (error) {
      await Promise.reject(error);
    }
  };

  return {
    setEditMode,
    updateUserData,
    checkData,
    updateUserAvatar,
    setAvatar,
  };
};
