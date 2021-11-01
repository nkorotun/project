import styled from 'styled-components/native';

export const NewsStyles = {
  Container: styled.View`
    margin: 10px 0;
    padding: 10px 15px;
    width: 100%;
    background-color: white;
  `,
  Titile: styled.Text`
    font-size: 18px;
    font-weight: 700;
  `,
  Image: styled.Image`
    min-width: 30%;
    height: 100px;
    margin-right: 5px;
  `,
  Content: styled.View<{full: true | false}>`
    max-width: 100%;
    flex: 1;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    ${({full}) => `width:${full ? 100 : 70}%;`}
  `,
};
