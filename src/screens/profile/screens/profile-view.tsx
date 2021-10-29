import React from 'react';
import {RootState} from '../../../redux/store';
import {useSelector} from 'react-redux';
import {ProfileStyles as Styled} from '../profile.styles';
import {Button} from '../../../components/button';
import {useProfileState} from '../profile.state';

export const ViewProfile = () => {
  const {name, surname, email} = useSelector(
    (state: RootState) => state.profile,
  );
  const {setEditMode} = useProfileState();

  return (
    <>
      <Button title="Edit" onPress={setEditMode} />
      <Styled.Name>
        {name} {surname}
      </Styled.Name>
      <Styled.Name>email: {email}</Styled.Name>
    </>
  );
};
