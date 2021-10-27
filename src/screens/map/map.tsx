import React from 'react';
import {SafeAreaView} from 'react-native';
import {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {MapStyles as Styled} from './map.styles';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';

export const Map = () => {
  const {geo} = useSelector((state: RootState) => state.map);

  return (
    <SafeAreaView>
      <Styled.Map
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: geo.latitude,
          longitude: geo.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={geo} />
      </Styled.Map>
    </SafeAreaView>
  );
};
