import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ExpenseItem = ({expenseTitle, expenseValue}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>{expenseTitle}</Text>
      <Text style={styles.texts}>R${expenseValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: 10
    },
    texts: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#30024A',
    }
  });

export default ExpenseItem;