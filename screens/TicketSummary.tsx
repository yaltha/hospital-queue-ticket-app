import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from '../components'
import { Icon } from 'react-native-elements'

const TicketSummary = () => {
    return (
        <View>
            <Text>Ticket Summary</Text>
            <View style={{
                alignItems: 'center',
                marginVertical: 20
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#0AD7D7'
                }}>
                    Congratulations!
                </Text>
                <Text>Your queue ticket is ready!</Text>
            </View>
            <View style={styles.resumeCardContainer}>
                <View>
                    <Text>Ticket No.</Text>
                    <Text>2342355PVG</Text>
                </View>
                <Text>Carter Philips</Text>
                <Text>30 years old</Text>
                <Text>Clinic</Text>
                <Text>Eye Clinic</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginVertical: 10,
                    }}
                >
                    <View
                        style={{
                            // width: 125,
                            paddingHorizontal: 20,
                            paddingVertical: 25,
                            borderRadius: 10,
                            margin: 3,
                            backgroundColor: '#eee',
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}
                    >
                        <Icon
                            type="font-awesome-5"
                            name="calendar-check"
                            style={{ marginRight: 10 }}
                        />
                        <Text>12/06/2021</Text>
                    </View>
                    <View
                        style={{
                            // width: 125,
                            paddingHorizontal: 20,
                            paddingVertical: 25,
                            borderRadius: 10,
                            margin: 3,

                            backgroundColor: '#eee',
                            flexDirection: 'row',
                            justifyContent: 'center'

                        }}
                    >
                        <Icon
                            type="font-awesome-5"
                            name="clock"
                            style={{ marginRight: 10 }}
                        />
                        <Text>12am- 13pm</Text>
                    </View>
                </View>
                <Image
                    source={require('../assets/qr-code.jpg')}
                    style={{
                        width: 195,
                        height: 195,
                        backgroundColor: '#0AD7D7',
                        borderRadius: 10,
                        alignSelf: 'center',
                        marginVertical: 10
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Icon
                        type="font-awesome-5"
                        name="qrcode"
                        style={{ marginRight: 10 }}
                    />
                    <Text>your ticket’s QR code</Text>
                </View>
            </View>
            <Button
                text="send to email"
                iconType="font-awesome-5"
                iconName="envelope"
                textStyle={styles.textStyle}
                btnIconStyle={styles.iconStyle}
                btnStyles={styles.btnSendEmailStyle}
            />
        </View>
    )
}

export default TicketSummary

const styles = StyleSheet.create({
    resumeCardContainer: {
        // backgroundColor: '#FAFEFF',
        backgroundColor: '#3b7988',
        width: '90%',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 20
    },
    btnSendEmailStyle: {
        width: 328,
        height: 100,
        borderRadius: 15,
        backgroundColor: '#fafafa',
        paddingVertical: 40,
        marginVertical: 20
    },
    textStyle: {
        color: '#0AD7D7',
        fontSize: 16
    },
    iconStyle: {
        color: '#0AD7D7',

    },
})
