import React from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";

interface LoadingProps{
    includeMessage?:boolean;
}

const Loading = ({includeMessage}:LoadingProps) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#4F46E5" />
            {includeMessage && <Text style={styles.text}>Cargando...</Text>}
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#ecf7ff",
    },
    text: {
        marginTop: 12,
        fontSize: 16,
        color: "#4B5563",
        fontWeight: "500",
    },
});