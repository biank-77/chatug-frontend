import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface FlashingShadowIconProps{
    name:React.ComponentProps<typeof FontAwesome>['name']
    color: string
}

export default function FlashingShadowIcon({name, color}: FlashingShadowIconProps) {
    const shadowOpacity = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(shadowOpacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(shadowOpacity, {
                    toValue: 0.3,
                    duration: 500,
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, []);

    return (
        <Animated.View
            style={[
                styles.iconContainer,
                {
                    shadowOpacity: Platform.OS === 'ios' ? shadowOpacity : undefined,
                    elevation: Platform.OS === 'android' ? 10 : undefined,
                },
            ]}
        >
            <FontAwesome
                size={28}
                name= {name}
                color={color}
                style={{ marginBottom: -3 }}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        shadowColor: '#0c74b7',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});