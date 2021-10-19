import React, { FC, useState } from 'react'
import { View, TextInput, Text, Image } from 'react-native'
import { IInput } from './Input.types'
import { InputStyles as Styled } from './Input.styles'
import { IconSVG } from './../icon/icon';

export const Input:FC<IInput> = (props) => {
    const {placeholder, value, isSecure, onChangeText, icon} = props;


    return (
        <Styled.InputWrapper>
            <Styled.Input 
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            secureTextEntry={isSecure}
            />
            <Styled.InputIcon
                source={icon} />
        </Styled.InputWrapper>
    )
}


