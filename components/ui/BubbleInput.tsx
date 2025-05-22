import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function BubbleInput() {
    return (
        <View style={styles.container}>
            <View style={styles.triangle} />

            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    multiline
                    numberOfLines={8}
                    placeholder="Escribe tu anuncio aqui..."
                    placeholderTextColor="#777"
                    textAlignVertical="top"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10,
    },
    triangle: {
        alignSelf: 'flex-start',
        width: 0,
        height: 0,
        borderTopWidth: 12,
        borderBottomWidth: 12,
        borderRightWidth: 20,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#ecf7ff',
        marginRight: -10,
        marginTop:2
    },
    inputWrapper: {
        backgroundColor: '#ecf7ff',
        borderRadius: 15,
        padding: 12,
        flex: 1,
        minHeight: 100,
    },
    input: {
        fontSize: 16,
        color: '#000',
        flex: 1,
    },
});