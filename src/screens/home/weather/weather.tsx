import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {WEATHER} from '../../../constants/weather';
import {RootState} from '../../../redux/store';
import {WeatherStyles as Styled} from './weather.styles';

export const Weather = () => {
  const {weather} = useSelector((state: RootState) => state.home);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={weather}
      renderItem={({item}) => {
        const weatherData = item.weather[0];
        return (
          <Styled.Container>
            <Styled.City>{item.name}</Styled.City>
            <Styled.WeatherBox>
              <Styled.Weather>{weatherData.main}</Styled.Weather>
              <Styled.Icon
                source={{uri: WEATHER.icon + weatherData.icon + '@2x.png'}}
              />
            </Styled.WeatherBox>
            <Styled.Description>{weatherData.description}</Styled.Description>
            <Styled.Temperature>
              {Math.round(item.main.temp) + '°C'}
            </Styled.Temperature>
          </Styled.Container>
        );
      }}
    />
  );
};
