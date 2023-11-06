import { View, Text , TouchableOpacity,  } from 'react-native'
import React from 'react'
import styles from './style'
import { Ionicons } from '@expo/vector-icons';


const Notice = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <TouchableOpacity style={styles.touchback}> 
            <Ionicons name="arrow-back-sharp" size={30} color="black" 
            onPress={()=>navigation.navigate('Info')} />
        </TouchableOpacity>
        <Text style = {styles.title}>Thông Báo</Text>
        <Text style = {styles.noti}>1. Ngày 21/10 đến 15/11 có ưu đãi đặc biệt mua 2 tặng 1</Text>
        <Text style = {styles.noti}>2. Đến ngày 20/11 giảm 10% cho các Bill trị giá từ 10$</Text>
    </View>
  )
}

export default Notice