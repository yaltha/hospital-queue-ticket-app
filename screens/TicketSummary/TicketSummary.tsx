import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from '../../components'
import { Icon } from 'react-native-elements'

const TicketSummary = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
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

            {/* Ticket summary card */}
            <View style={styles.resumeCardContainer}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text>Ticket No.</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginLeft: 5,
                    }}>2342355PVG</Text>
                </View>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 24
                }}>Carter Philips</Text>
                <Text>30 years old</Text>
                <View style={{
                    alignItems: 'flex-end',
                    marginRight: 10
                }}>
                    <Text>Clinic</Text>
                    <Text style={{ fontWeight: 'bold' }}>Eye Clinic</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginVertical: 10,
                        justifyContent: 'center'
                    }}
                >
                    <View style={styles.dateTimeContainer}>
                        <Icon
                            type="font-awesome-5"
                            name="calendar-check"
                            style={{ marginRight: 10 }}
                            iconStyle={{ color: '#0AD7D7' }}
                        />
                        <Text style={{
                            fontSize: 16,
                            color: '#0AD7D7',
                            fontWeight: 'bold'
                        }}>12/06/2021</Text>
                    </View>
                    <View style={styles.dateTimeContainer}>
                        <Icon
                            type="font-awesome-5"
                            name="clock"
                            style={{ marginRight: 10 }}
                            iconStyle={{ color: '#0AD7D7' }}
                        />
                        <Text style={{
                            fontSize: 16,
                            color: '#0AD7D7',
                            fontWeight: 'bold'
                        }}>12am- 13pm</Text>
                    </View>
                </View>
                <Image
                    source={require('../../assets/qr-code.jpg')}
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
                        alignItems: 'center'
                    }}
                >
                    <Icon
                        type="font-awesome-5"
                        name="qrcode"
                        style={{ marginRight: 10 }}
                        iconStyle={{ color: '#0AD7D7' }}
                    />
                    <Text style={{
                        color: '#0AD7D7',
                        fontWeight: 'bold'
                    }}>your ticket’s QR code</Text>
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
        backgroundColor: '#FAFEFF',
        // backgroundColor: '#3b7988',
        width: 300,
        padding: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    dateTimeContainer: {
        // width: 125,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        margin: 3,
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnSendEmailStyle: {
        width: 328,
        height: 100,
        borderRadius: 15,
        backgroundColor: '#fafafa',
        paddingVertical: 40,
        marginVertical: 20,
        alignSelf: 'center'
    },
    textStyle: {
        color: '#0AD7D7',
        fontSize: 16
    },
    iconStyle: {
        color: '#0AD7D7',

    },
})
