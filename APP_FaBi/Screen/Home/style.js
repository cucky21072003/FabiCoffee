import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container:{
         flex:1,
    },
    img:{
        width:350,
        height:210,
        top:40,
        marginLeft:20,
    }, 
    body:{
        width: 500, 
        height: 500, 
        marginTop:55,
        backgroundColor:'#C6FAF3',
        flexDirection: 'column',
        alignItems: 'center',
    },
    btn:{
         width:250,
        height:90,
        backgroundColor:'#2DE840',
        Color:'#FFFFFF',
        marginRight:90,
        marginVertical: 10,
    },
})

export default styles
