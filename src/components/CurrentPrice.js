import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles/CurrentPrice.style'

const CurrentPrice = () => {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>CurrentPrice</Text>
      <Text style={styles.textPrice}>ultima cotacao</Text>
    </View>
  )
}

export default CurrentPrice