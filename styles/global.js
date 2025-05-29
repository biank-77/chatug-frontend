import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
    textPrimary: {
        fontSize: 16,
        color: '#333',
    },
    primaryButton: {
        backgroundColor:"#0c74b7",
        borderRadius:4,
        width:"100%",
        paddingVertical:10,
    },
    primaryButtonText: {
        color: "white",
        fontWeight: 'bold',
        textAlign:"center"
    },
    backgroundColor:{
        backgroundColor: "#ecf7ff",
        flex: 1,
    },
    screenContainer: {
        backgroundColor: "#ecf7ff",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#e9e9e9',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        fontSize: 16,
        color: "gray",
        backgroundColor:"white"
    },
    divider: {
        width:"80%",
        color: "#0c74b7",
        opacity:0.2,
        marginTop:32,
        marginBottom:10
    },
    hyperLink: {
        color: '#0c74b7',
        textDecorationLine: "underline"
    },
    errorMessage: {
        color: "red",
        fontSize:16,
        marginTop:10
    },
    headerTitle:{
        fontSize: 24,
        color: '#0c74b7',
        fontWeight: 'bold'
    },
    card: {backgroundColor:"white", width:"100%", padding:20 },
    cardHeader :{
        flex:1,
        justifyContent:'flex-start',
        alignItems: 'center',
        flexDirection:"row",
        gap:10,
        borderBottomWidth:0.1,
        borderBottomColor:"#0c74b7",
        paddingBottom:6
    },
    cardPicture: {borderRadius:100, width:40, height:40},
});

export default GlobalStyles;