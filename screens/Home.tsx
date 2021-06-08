import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/'

const Home = () => {
    return (
        <View>
            {/* <Text>Home</Text> */}
            <Button
                text="get a ticket"
                btnStyles={styles.btnGetTicket}
                textStyle={styles.btnTextGetTicket}
                btnIconStyle={styles.btnIconStyle}
                iconType="font-awesome-5"
                iconName="ticket-alt"
            // onPress={() => navigation.navigate("")}
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
    btnTextGetTicket: {},
    btnIconStyle: {},
    btnTAS: {
        width: 328,
        height: 70,
        backgroundColor: '#fafafa',
        borderRadius: 15,
        alignSelf: 'center',
        paddingVertical: 25,
        marginVertical: 10
    },
    btnTextTAS: {},
    btnAbout: {
        marginVertical: 10

    },
    btnTextAbout: {}
})
