import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

interface ButtonProps {
    btnStyles?: {}
    textStyle?: {}
    btnIconStyle?: {}
    text: string
    iconType: string
    iconName: string
    onPress: () => void
}

const Button: React.FC<ButtonProps> = ({
    btnStyles,
    textStyle,
    btnIconStyle,
    text,
    iconName,
    iconType,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={[btnStyles, styles.defaultStyle]}
            onPress={onPress}>
            <Icon
                type={iconType}
                name={iconName}
                iconStyle={btnIconStyle}
            />
            <Text style={[textStyle, styles.textDefault]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    defaultStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textDefault: {
        marginLeft: 10,
        textTransform: 'uppercase',
        fontWeight: "bold",
    },

})
