import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { Fragment } from 'react'
import styles from '../styles/QuotationList.style'
import QuotationItem from './QuotationItem'

const QuotationList = ({filterDay, listTransactions}) => {
  // const daysQuery = props.filterDay
  return (
    <Fragment>
      <View style={styles.filters}>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => { filterDay(7) }}
        >
          <Text style={styles.textButtonQuery}>7D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => { filterDay(15) }}
        >
          <Text style={styles.textButtonQuery}>15D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => { filterDay(30) }}
        >
          <Text style={styles.textButtonQuery}>1M</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => { filterDay(90) }}
        >
          <Text style={styles.textButtonQuery}>3M</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => { filterDay(180) }}
        >
          <Text style={styles.textButtonQuery}>6M</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList 
          data={listTransactions}
          renderItem={({ item }) => {
            return (
              <QuotationItem valor={item.valor} data={item.data} />
            )

          }}
        
        />

      </ScrollView>
    </Fragment>
  )
}

export default QuotationList