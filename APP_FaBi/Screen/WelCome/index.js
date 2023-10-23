import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'

import styles from './style';
const WelCome = () => {
    const SkiiImage = require('../WelCome/img/6493323_image.webp');
  return (
    <View>
        <Text style={styles.title}>Welcomen</Text>
        <Text style={styles.text}>App FaBi</Text>
        <View style={styles.comeon}>
          <TouchableOpacity>
            <View style={styles.clickcomeon}>
              <Text style={styles.textComeon}>Come On</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <Image source={SkiiImage} style={styles.image}/>
    </View>
  )
}

export default WelCome;
