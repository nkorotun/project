import React from 'react';
import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import {Button} from '../../components/button';
import {useHomeState} from './home.state';
import {HomeStyles as Styled} from './home.styles';
import {News} from './news/news';
import {Weather} from './weather/weather';

export const Home = () => {
  const {loadNews, loadWeather} = useHomeState();

  const loadData = () => {
    loadNews();
    loadWeather();
  };

  return (
    <ScrollView>
      <Styled.Container>
        <StatusBar />
        <SafeAreaView>
          <Weather />
          <News />
          <Button onPress={loadData} title="Load News and Weather" />
        </SafeAreaView>
      </Styled.Container>
    </ScrollView>
  );
};
