import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import {PICTURES} from '../../constants/pictures';
import {ProfileStyles as Styled} from './profile.styles';
import {ViewProfile} from './screens/profile-view';
import {EditProfile} from './screens/profile-edit';
import {IconSVG} from '../../components/icon/icon';
import {COLORS} from '../../constants/colors';
import {SCREENS} from '../../constants/screens';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const Profile = () => {
  const {editMode, image} = useSelector((state: RootState) => state.profile);

  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  const openCamera = () => {
    navigate(SCREENS.camera);
  };
  return (
    <ScrollView>
      <SafeAreaView>
        <Styled.AvatarBox>
          <Styled.Avatar
            source={
              image ? {uri: `data:image/jpeg;base64,${image}`} : PICTURES.user
            }
          />
          <Styled.IconAdd>
            <IconSVG
              size={48}
              color={COLORS.primary}
              type="add"
              onPress={openCamera}
            />
          </Styled.IconAdd>
        </Styled.AvatarBox>
        {editMode ? <EditProfile /> : <ViewProfile />}
      </SafeAreaView>
    </ScrollView>
  );
};
