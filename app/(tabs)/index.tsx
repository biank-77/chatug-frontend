import React from 'react';
import {StyleSheet, Animated, Button} from 'react-native';
import GlobalStyles from "@/styles/global";
import NotificationCard from "@/components/home/notificationCard";
import ScrollView = Animated.ScrollView;
import NewNotificationButton from "@/components/home/newNotificationButton";
import {useNotifications} from "@/hooks/useNotifications";
import Loading from "@/components/ui/Loading";
import {useAuth} from "@/context/AuthContext";

const HomeScreen = () => {
    const { signOut, userInfo } = useAuth();
    const {notifications, loading, addNotification} = useNotifications()

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {userInfo && userInfo.isAdmin && <NewNotificationButton addNotification={addNotification}/>}
            {loading ?
                <Loading/> :
                notifications.map((not, it) => <NotificationCard key={it} item={not}/>)}
            <Button title={"Logout"} onPress={handleSignOut} />
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {justifyContent: "flex-start", paddingTop:10, paddingHorizontal:5, gap:10, padding:20, backgroundColor: "#ecf7ff"},
    title: { fontSize: 24, marginBottom: 20 },
});

export default HomeScreen;