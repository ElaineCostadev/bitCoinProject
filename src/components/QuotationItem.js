import { View, Text, Image } from 'react-native'
import React from 'react'
// import images from '../img/bitcoin.png'
import styles from '../styles/QuotationItem.style'

const QuotationItem = () => {
  return (
    <View style={styles.mainContent}>

      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logoBitcoin}
            source={require('../img/bitcoin.png')}
          />
          <Text style={styles.dayCotation}>06/04/23</Text>
        </View>
      </View>

      <View style={styles.contextRigth}>
        <Text style={styles.priceRigth}>5333,11</Text>
      </View>

    </View>
  )
}

export default QuotationItem