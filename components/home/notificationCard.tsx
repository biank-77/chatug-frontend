import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import GlobalStyles from "@/styles/global";
import {Notification} from "@/types/notification";
import {formatDate} from "@/utils/formatDate";

interface NotificationCardProps{
    item: Notification
}

const NotificationCard = ({item}:NotificationCardProps) => {

    return (
        <View style={GlobalStyles.card}>

            <View style={GlobalStyles.cardHeader}>
                <Image source={require('@/assets/images/profesor-icon.png')} style={GlobalStyles.cardPicture} />
                <View style={styles.publisherInfo}>
                    <Text>{item.user?.name}</Text>
                    <Text style={{"fontSize":11}}>{formatDate(item.createdDate)}</Text>
                </View>
            </View>

            <View style={styles.content}>
                <Text> {item.message}
                </Text>

                {item.image &&
                    <Image
                        source={{ uri: item.image }}
                        style={styles.imageContent}
                    />
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    publisherInfo: {flex:1, flexDirection:"column", gap:4},
    content:{
        paddingTop:10
    },
    imageContent:{
        width: '100%',
        aspectRatio: 1,
        minHeight: 300
    },
});

export default NotificationCard;