import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/'

const Home = () => {
    return (
        <View style={styles.homeContainer}>
            <Text style={styles.headerText}>WELCOME TO HOSPITAL QUEUE TICKET</Text>
            <Button
                text="get started"
                btnStyles={styles.btnStarted}
                textStyle={styles.btnTextStarted}
                iconStyle={styles.btnIconStyle}
                iconType="font-awesome-5"
                iconName="angle-double-right"
            // onPress={() => navigation.navigate("")}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#0AD7D7",
        width: 215,
        
    },
    btnStarted: {
        width: 200,
        height: 100,
        backgroundColor: '#56CCF2',
        borderRadius: 15,
    },
    btnTextStarted: {
        fontSize: 18,
        color: "#E1FEFE",
        justifyContent: "center",
        alignContent: "center",
    },
    btnIconStyle: {
        color: "#E1FEFE",
    },
})
