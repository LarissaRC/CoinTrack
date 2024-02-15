import { View, Text, Button, StyleSheet, ProgressBarAndroid, ScrollView } from 'react-native'
import React from 'react'
import MonthsList from '../Components/Home/MonthsList';

const HomeScreen = ({ navigation }) => {

  var totalSpent = 320, maxToSpent = 1000;
  const progress = (totalSpent / maxToSpent) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>Você está em</Text>
        <Text style={styles.current_month}>DEZEMBRO/2024</Text>
        <Text style={styles.header_text}>Meta de gastos do mês</Text>

        <View style={styles.money_spent_container}>
          <ProgressBarAndroid
            style={styles.progress_bar}
            styleAttr="Horizontal"
            indeterminate={false}
            color={'#B246F2'}
            progress={progress / 100}
          />
          <View style={styles.money_spent_texts_view}>
            <Text style={styles.header_text}>R${totalSpent}</Text>
            <Text style={styles.header_text}>R${maxToSpent}</Text>
          </View>
        </View>
        </View>

        <View style={{ flex: 1, width: '100%'}}>
          <Text style={styles.month_list_text}>Despesas do ano</Text>
          <MonthsList />
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header_container: {
    paddingTop: 30,
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#F3D9FF',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  current_month: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#30024A',
  },
  header_text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#30024A',
  },
  money_spent_container: {
    width: '100%',
    paddingLeft: 50,
    paddingRight: 50,
  },
  progress_bar: {
    width: '100%',
  },
  money_spent_texts_view: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  month_list_text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#30024A',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }
});

export default HomeScreen;