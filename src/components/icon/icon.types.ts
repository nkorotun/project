import {StyleProp, ViewStyle} from 'react-native';

import {TIconNames} from './';

export interface IIconSVGProps {
  type: TIconNames;
  size?: number;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
