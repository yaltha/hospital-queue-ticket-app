import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../../components'
import defaultScreen from '../../config/defaultScreen'

import { StackNavigationProp } from '@react-navigation/stack'
import { TopNavigatorParamsList } from '../../types'

interface HomeProps {
    navigation: StackNavigationProp<TopNavigatorParamsList>
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        // style={defaultScreen}
        >
            <Button
                text="get a ticket"
                btnStyles={styles.btnGetTicket}
                textStyle={styles.btnTextGetTicket}
                btnIconStyle={styles.btnIconStyle}
                iconType="font-awesome-5"
                iconName="ticket-alt"
                onPress={() => navigation.navigate("Form")}
            />
            <Button
                text="terms and conditions"
                btnStyles={styles.btnTAS}
                textStyle={styles.btnTextTAS}
                btnIconStyle={styles.btnIconStyle}
                iconType="font-awesome-5"
                iconName="newspaper"
            // onPress={() => navigation.navigate("")}
            />
            <Button
                text="about"
                btnStyles={styles.btnAbout}
                textStyle={styles.btnTextAbout}
                btnIconStyle={styles.btnIconStyle}
                iconType="font-awesome-5"
                iconName="question-circle"
            // onPress={() => navigation.navigate("")}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    btnGetTicket: {
        width: 328,
        height: 150,
        backgroundColor: '#fafafa',
        borderRadius: 15,
        alignSelf: 'center',
        paddingVertical: 65,
        marginVertical: 30
    },
    btnTextGetTicket: {
        color: '#0AD7D7',
        fontSize: 16
    },
    btnIconStyle: {
        color: '#0AD7D7',
    },
    btnTAS: {
        width: 328,
        height: 70,
        backgroundColor: '#fafafa',
        borderRadius: 15,
        alignSelf: 'center',
        paddingVertical: 25,
        marginVertical: 10
    },
    btnTextTAS: {
        color: '#0AD7D7',
        fontSize: 16
    },
    btnAbout: {
        marginVertical: 10
    },
    btnTextAbout: {
        color: '#0AD7D7',
        fontSize: 16
    }
})
