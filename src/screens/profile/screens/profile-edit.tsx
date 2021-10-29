import React from 'react';
import {RootState} from '../../../redux/store';
import {useSelector} from 'react-redux';
import {ProfileStyles as Styled} from '../profile.styles';
import {Button} from '../../../components/button';
import {COLORS} from '../../../constants/colors';
import {useProfileState} from '../profile.state';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {profileSchema} from './form-schema';
import {ControllerInput} from '../../../components/input-controller/input-controller';
import {Input} from '../../../components/input';

export const EditProfile = () => {
  const {name, surname, email} = useSelector(
    (state: RootState) => state.profile,
  );
  const {setEditMode, updateUserData} = useProfileState();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {name: name, surname: surname},
    resolver: yupResolver(profileSchema),
  });

  return (
    <>
      <Styled.ButtonContainer>
        <Button title="Cancel" color={COLORS.red} onPress={setEditMode} />
        <Button
          title="Apply"
          color={COLORS.black}
          onPress={handleSubmit(updateUserData)}
        />
      </Styled.ButtonContainer>
      <Styled.Label>Email</Styled.Label>
      <Input value={email} disabled={true} />
      <Styled.Label>Name</Styled.Label>
      <ControllerInput
        control={control}
        errors={errors}
        name="name"
        placeholder="Enter name"
        type=""
      />
      <Styled.Label>Surname</Styled.Label>
      <ControllerInput
        control={control}
        errors={errors}
        name="surname"
        placeholder="Enter surname"
        type=""
      />
    </>
  );
};
