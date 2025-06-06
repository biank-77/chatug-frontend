import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Text, TextInput} from 'react-native';
import GlobalStyles from "@/styles/global";
import {useAuth} from "@/context/AuthContext";
import {Notification, NotificationType} from "@/types/notification";
import ImagePickerComponent from "@/components/ui/ImagePicker";
import {ImagePickerAsset} from "expo-image-picker";
import Loading from "@/components/ui/Loading";

interface FormNewNotificationProps{
    setModalVisible: (visible: boolean) => void;
    addNotification: (notification: Notification) => Promise<Notification>;
    type: NotificationType
}

const FormNewNotification = ({setModalVisible, addNotification, type}: FormNewNotificationProps) => {
    const [message, setMessage] = useState("")
    const [image, setImage] = useState<ImagePickerAsset|null>(null)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { userInfo } = useAuth();

    const saveAndSendNotification = async() => {
        setIsLoading(true)
        const notification = await addNotification({
            image: image?`data:${image?.mimeType||""};base64,${image?.base64||""}`: "",
            imageName: image?.fileName || "",
            message,
            userId: userInfo?.id,
            createdDate: new Date().toISOString(),
            type
        })
        if(notification){
            setModalVisible(false)

        }else{
            setError("Ha ocurrido un error, vuelve a intentarlo!")
        }
        setIsLoading(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputTextWithImage}>
                <View style={styles.header}>
                    <Image source={require('@/assets/images/profesor-icon.png')} style={[GlobalStyles.cardPicture, {marginTop:4}]} />
                    {userInfo && <Text style={styles.profileName}>{userInfo.name}</Text>}
                </View>
                <TextInput
                    style={styles.input}
                    multiline
                    numberOfLines={6}
                    placeholder="Escribe tu anuncio aqui..."
                    placeholderTextColor="#777"
                    textAlignVertical="top"
                    value={message}
                    onChangeText={setMessage}
                />

            </View>

            <View style={styles.footer}>
                <ImagePickerComponent image={image} setImage={setImage}/>

                {isLoading? <Loading includeMessage={false}/> :
                <TouchableOpacity style={[GlobalStyles.primaryButton, styles.publishButton]} onPress={saveAndSendNotification} >
                    <Text style={GlobalStyles.primaryButtonText}>Publicar</Text>
                </TouchableOpacity>
                }
            </View>

            {error && <Text style={GlobalStyles.errorMessage}> {error} </Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop:4,
        marginTop:"-25%",
    },
    profileName: {
        color: "#084973",
        fontWeight:"bold",
        fontSize:16
    },
    header:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap:10,
        alignSelf:"flex-start",
        marginBottom:15,
    },
    inputTextWithImage: {
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 15,
    },
    textImage:{
        color:"#0c74b7",
        fontWeight:"bold",
    },
    input:{
        fontSize: 16,
        marginTop:12,
        color: '#000',
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:"#f0f0f0",
        padding:20,
        minWidth:300,
        borderRadius:10,
        flex: 1
    },
    footer:{
        width: '100%',
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
    },
    publishButton:{
        width:"80%"
    }
});

export default FormNewNotification;