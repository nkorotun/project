import React, { FC } from 'react';
import { ICONS } from './icon.constants';
import { IconStyles as Styled } from './icon.styles';
import { IIconSVGProps } from './icon.types';

export type TIconNames = keyof typeof ICONS;

export const IconSVG: FC<IIconSVGProps> = (props) => {
  const { type, size, style, onPress } = props;

  const Icon = ICONS[type];
  const IconProps = Icon({})?.props;

  const iconHeight = size ?? IconProps.height;
  const iconWidth = size ?? IconProps.width;

  return (
    <Styled.Wrapper
      onPress={onPress}
      hitSlop={{ bottom: 15, left: 15, right: 15, top: 15 }}
      activeOpacity={onPress ? 0.7 : 1}
      style={[
        {
          height: iconHeight,
          width: iconWidth,
        },
        style,
      ]}
    >
      <Icon
        height={iconHeight}
        width={iconWidth}
      />
    </Styled.Wrapper>
  );
};
