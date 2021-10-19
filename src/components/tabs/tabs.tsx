import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import { ITabs } from './tabs.types'
import { TabsStyles as Styled } from './tabs.styles'

export const Tabs:FC<ITabs> = (props) => {

    const { isLogin, selectTab } = props;

    return (

        <Styled.Container>
            <Styled.Tab onPress={selectTab} disabled={isLogin}>
               <Styled.Text>Login</Styled.Text>
            </Styled.Tab>

            <Styled.Tab onPress={selectTab} disabled={isLogin}>
               <Styled.Text>Sign Up</Styled.Text>
            </Styled.Tab>
        </Styled.Container>
    )
}


