import React from 'react';
import { StyleSheet, Animated} from 'react-native';
import GlobalStyles from "@/styles/global";
import NotificationCard from "@/components/home/notificationCard";
import ScrollView = Animated.ScrollView;
import NewNotificationButton from "@/components/home/newNotificationButton";
import {useNotifications} from "@/hooks/useNotifications";
import Loading from "@/components/ui/Loading";

const HomeScreen = () => {
    // const { signOut, userToken, userInfo } = useAuth();
    const {notifications, loading, addNotification} = useNotifications()

    // const handleSignOut = async () => {
    //     await signOut();
    // };

    return (
        <ScrollView  contentContainerStyle={[GlobalStyles.screenContainer, styles.container]}>
            <NewNotificationButton addNotification={addNotification}/>
            {loading ?
                <Loading/> :
                notifications.map((not, it) => <NotificationCard key={it} item={not}/>)}
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {justifyContent: "flex-start", paddingTop:10, paddingHorizontal:5, gap:10},
    title: { fontSize: 24, marginBottom: 20 },
});

export default HomeScreen;