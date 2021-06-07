import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export type Props = {
    labelText: string,
    placeholder: Readonly<string>,
    keyboardType: any
}

const Input: React.FC<Props> = ({
    labelText,
    placeholder,
    keyboardType
}) => {
    return (
        <View style={styles.inputStyle}>
            <Text style={styles.textStyle}>{labelText}:</Text>
            <TextInput
                style={styles.textInputStyle}
                placeholder={placeholder}
                keyboardType={keyboardType}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputStyle: {
        marginVertical: 10,
    },
    textStyle: {
        fontSize: 14,
        marginBottom: 5,
        color: '#0AD7D7',
    },
    textInputStyle: {
        width: 327,
        height: 48,
        backgroundColor: '#eee',
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 20,
    }
})
