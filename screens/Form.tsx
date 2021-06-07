import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Input } from '../components'

const Form = () => {
    return (
        <View>
            <Text>Form Data</Text>
            <Input labelText="Name" placeholder="your name..." keyboardType="default" />
            <Input labelText="Age" placeholder="your age..." keyboardType="number-pad" />
            <Input labelText="Clinic" placeholder="which clinic do you want to see..." keyboardType="default" />
            <Text style={styles.availableTextStyle}>Choose available date</Text>
            <TouchableOpacity style={styles.dateViewStyle}>
                <Text>date view</Text>
            </TouchableOpacity>
            <Button
                text="proceed"
                btnStyles={styles.btnProceedStyle}
                iconName="arrow-alt-circle-right"
                iconType="font-awesome-5"
                textStyle={styles.btnTextStyle}
                btnIconStyle={styles.iconStyles}
            // onPress
            />
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    availableTextStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0AD7D7',
        marginVertical: 10
    },
    dateViewStyle: {
        width: 200,
        height: 80,
        backgroundColor: 'whitesmoke',
        borderRadius: 20,
        alignSelf: 'center'
    },
    btnProceedStyle: {
        width: 328,
        height: 70,
        borderRadius: 15,
        backgroundColor: '#fafafa',
        paddingVertical: 20,
        marginVertical: 20
    },
    btnTextStyle: {
        color: '#0AD7D7',
        fontSize: 16
    },
    iconStyles: {
        color: '#0AD7D7',
    }
})
