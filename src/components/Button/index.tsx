import React from "react";
import { 
    StyleSheet,
    TouchableOpacity,
    Text,
    TouchableOpacityProps
} from "react-native";

interface props extends TouchableOpacityProps {
    title: string
}

export function Button({title, ...rest }: props){
    return(
        <TouchableOpacity 
            style={styles.buttonContainer}
            activeOpacity={0.7}
            {...rest }
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 12,
        alignItems:"center",
        borderRadius: 6,
        backgroundColor: '#00aa00',
        marginBottom: 21
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "700",
        color: '#ddd',
    },

})