import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import {PICTURES} from '../../constants/pictures';
import {ProfileStyles as Styled} from './profile.styles';
import {ViewProfile} from './screens/profile-view';
import {EditProfile} from './screens/profile-edit';

export const Profile = () => {
  const {editMode} = useSelector((state: RootState) => state.profile);

  return (
    <ScrollView>
      <SafeAreaView>
        <Styled.AvatarBox>
          <Styled.Avatar source={PICTURES.user} />
        </Styled.AvatarBox>
        {editMode ? <EditProfile /> : <ViewProfile />}
      </SafeAreaView>
    </ScrollView>
  );
};
