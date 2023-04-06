import { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import axios from 'axios';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationList';

// ajustar o erro da api quando o numero for menor que 9 - acrescentar o Zero à esquerda
const addLeftZero = (number) => {
  if (number <= 9) {
    return '0' + number
  }
  return number
}

const url = (days) => {
  // getMonth()+1 - month é um array de meses 0 a 11 - quando cliente chamar vai add +1 no array e chamar o mes correto
  const date = new Date();
  const listLastDays = days
  const endDate = `2021-${addLeftZero(date.getMonth() + 1)}-${addLeftZero(date.getDate())}`

  // ajustar a data para pegar o dia mais atual e subtrair a quantidade de dias selecionada pelo cliente (10D, 20D...)
  date.setDate(date.getDate() - listLastDays)

  const startDate = `2021-${addLeftZero(date.getMonth() + 1)}-${addLeftZero(date.getDate())}`

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`

}

const getListCoins = async (url) => {
  let response = await fetch(url)
  let returnApi = await response.json()
  let dataListQuotation = returnApi.bpi
  // o retorno da API é um objeto, por isso preciso do Object.Keys para iterar e fazer um novo objeto
  const coinsList = Object.keys(dataListQuotation).map((eachItem) => ({
      data: eachItem.split('-').reverse().join('/'),
      valor: dataListQuotation[eachItem]
  }))
  return coinsList.reverse()
}

const getPriceCoinsGraphic = async (url) => {
  try {
    const response = await axios.get(url)
    const dataListQuotationG = response.data.bpi
    const coinsListG = Object.keys(dataListQuotationG).map((eachItem) => dataListQuotationG[eachItem])
    return coinsListG
  } catch(error) {
    console.log(error.message, 'error message');
    // return null
  }

//   let responseG = await fetch(url)
//   let returnApiG = await responseG.json()
//   let dataListQuotationG = returnApiG.bpi
//   console.log(dataListQuotationG);
//   const coinsListG = Object.keys(dataListQuotationG).map((eachItem) => {
//     dataListQuotationG[eachItem]
//   })
  
//   console.log(coinsListG)
}

export default function App() {
  const [coinsList, setCoinsList] = useState([])
  const [coinsGraphicList, setCoinsGraphicList] = useState([0])
  const [days, setDays] = useState(10)
  const [updateData, setUpdateData] = useState(true)

  const updateDay = (day) => {
    setDays(day)
    setUpdateData(true)
  }

  useEffect(() => {

    getListCoins(url(days)).then((data) => {
      setCoinsList(data)
    }).catch((error)=>{
      console.log(error.message);
    });

    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinsGraphicList(dataG)
    }).catch((error)=>{
      console.log(error.message);
    })

    if (updateData) {
      setUpdateData(false)
    }


  }, [updateData])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor='#f50d41'
        barStyle={'dark-content'}
      
      />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationList filterDay={updateDay} listTransactions={coinsList}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
});

