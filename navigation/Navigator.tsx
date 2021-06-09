import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { RootNavigationParamsList, TopNavigatorParamsList } from '../types'

import { Form, Started, Home, TicketSummary } from '../screens'

const RootStack = createStackNavigator<RootNavigationParamsList>()
const MainStack = createStackNavigator<TopNavigatorParamsList>()

const MainNavigator: React.FC = () => {
    const { Navigator, Screen } = MainStack
    return (
        <Navigator
            headerMode="float"
            initialRouteName='Started'
        >
            <Screen name='Form' component={Form}></Screen>
            <Screen name='Home' component={Home}></Screen>
            <Screen name='Started' component={Started}></Screen>
            <Screen name='TicketSummary' component={TicketSummary}></Screen>
        </Navigator>
    )
}

const RootNavigator: React.FC = () => {
    const { Navigator, Screen } = RootStack
    return (
        <Navigator headerMode='none'>
            <Screen name='Main' component={MainNavigator}></Screen>
        </Navigator>
    )
}
export default RootNavigator

