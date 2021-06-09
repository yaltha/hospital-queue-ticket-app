import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from '../../components'
import defaultScreen from '../../config/defaultScreen'

import { StackNavigationProp } from '@react-navigation/stack'
import { TopNavigatorParamsList } from '../../types'

interface StartedProps {
    navigation: StackNavigationProp<TopNavigatorParamsList>
}

const Started: React.FC<StartedProps> = ({ navigation }) => {
    return (
        <View
            // style={defaultScreen}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Image style={styles.hospitalImg} source={require('../../assets/hospital.jpg')} />
            <Text style={styles.headerText}>welcome to hospital queue ticket</Text>
            <Button
                text="get started"
                btnStyles={styles.btnStarted}
                textStyle={styles.btnTextStarted}
                btnIconStyle={styles.btnIconStyle}
                iconType="font-awesome-5"
                iconName="angle-double-right"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}

export default Started

const styles = StyleSheet.create({
    homeContainer: {
        // display: 'flex',
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "#0AD7D7",
        width: 215,
        textTransform: 'uppercase',
    },
    btnStarted: {
        width: 200,
        height: 100,
        backgroundColor: '#56CCF2',
        borderRadius: 15,
        alignSelf: 'center',
        paddingVertical: 35,
        marginVertical: 30
    },
    btnTextStarted: {
        fontSize: 18,
        color: "#E1FEFE",
    },
    btnIconStyle: {
        color: "#E1FEFE",
    },
    hospitalImg: {
        marginLeft: -25,
        marginVertical: 30
    }
})
