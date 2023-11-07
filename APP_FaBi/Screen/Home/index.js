import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './style'
import { Button } from 'react-native-paper';

const imghome = require('../../assets/imghome.png');

const Home = ({navigation}) => {
  return (
<View style={styles.container}>
        <Image source = {imghome} style={styles.img}></Image>
        <View style = {styles.body}>
            <TouchableOpacity>
              <View style = {styles.btn}>
                <Button
                    title='Coffee' 
                    onPress={()=>navigation.navigate('')}
                />
                {/* <Button
                    title='Milk shake' 
                    onPress={()=>navigation.navigate('')}
                />
                <Button
                    title='Smoothie' 
                    onPress={()=>navigation.navigate('')}
                />
                <Button
                    title='Tea' 
                    onPress={()=>navigation.navigate('')}
                />
                <Button
                    title='Other' 
                    onPress={()=>navigation.navigate('')}
                /> */}
              </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Home