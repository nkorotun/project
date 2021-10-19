import styled from 'styled-components/native';

export const InputStyles = {
  Input: styled.TextInput`
    max-width: 90%;
    overflow: hidden;
  `,
  InputWrapper: styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    height: 40px;
    padding: 0 16px;
    margin: 10px 25px;
    border-width: 2px;
    border-radius: 25px;
    border-color: #c2c2c2;
    background-color: #fff;
  `,
  InputIcon: styled.Image`
    width: 24px;
    height: 24px;
    margin: 0 4px;
    opacity: 0.6;
  `,
};
