import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { Fragment } from 'react'
import styles from '../styles/QuotationList.style'

const QuotationList = () => {
  return (
    <Fragment>
      <View style={styles.filters}>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => {}}
        >
          <Text style={styles.textButtonQuery}>7 D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => {}}
        >
          <Text style={styles.textButtonQuery}>15 D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => {}}
        >
          <Text style={styles.textButtonQuery}>1 M</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => {}}
        >
          <Text style={styles.textButtonQuery}>3 M</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => {}}
        >
          <Text style={styles.textButtonQuery}>6 M</Text>
        </TouchableOpacity>
      </View>
      {/* <ScrollView></ScrollView> */}
    </Fragment>
  )
}

export default QuotationList