import React from 'react';
import {Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {NewsStyles as Styled} from './news.styles';

export const News = () => {
  const {news} = useSelector((state: RootState) => state.home);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={news}
      renderItem={({item}) => {
        return (
          <Styled.Container>
            <Styled.Content full={!item.urlToImage}>
              {item.urlToImage ? (
                <Styled.Image
                  source={{uri: item.urlToImage}}
                  resizeMode="cover"
                />
              ) : (
                <></>
              )}
              <Styled.Titile>{item.title}</Styled.Titile>
            </Styled.Content>
            <Text>{item.description}</Text>
          </Styled.Container>
        );
      }}
    />
  );
};
