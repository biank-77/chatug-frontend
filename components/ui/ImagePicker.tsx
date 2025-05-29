import React from 'react';
import { Image, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {ImagePickerAsset} from "expo-image-picker";

interface ImagePickerComponentProps{
    image: ImagePickerAsset|null
    setImage: (image: ImagePickerAsset|null) => void
}

export default function ImagePickerComponent({image, setImage}: ImagePickerComponentProps) {

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permiso requerido', 'Necesitamos acceso a tu galería para seleccionar imágenes.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0]);
            console.log(result.assets);
        }
    };

    return (
        <TouchableOpacity style={[styles.iconButton, image?{borderColor: "green"}:{}]}  onPress={pickImage} >
            {
                !image?
                    <FontAwesome name="image" size={22} color="#0c74b7" /> :
                    <Image source={{ uri: image.uri }} style={{ width: 22, height: 22}} />
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        borderColor:"#f0f0f0",
        borderWidth:1,
        padding: 10,
        borderRadius: 10
    }
})