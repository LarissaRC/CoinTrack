import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SimpleForm from '../Components/Forms/SimpleForm'
import DateForm from '../Components/Forms/DateForm'
import DescriptionForm from '../Components/Forms/DescriptionForm'
import ConclusionForm from '../Components/Forms/ConclusionForm'
import SelectionForm from '../Components/Forms/SelectionForm'

const AddExpenseScreen = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Gasto</Text>
      <View style={{width: "90%", alignItems: 'center'}}>
      <SimpleForm formTitle={'Alimentação'}/>
      <SimpleForm formTitle={'Almoço no shopping'}/>
      <DateForm formTitle={'Data'}/>
      <SimpleForm formTitle={'Amazonas Shopping'}/>
      <SimpleForm formTitle={'25 e algo'}/>
      <DescriptionForm formTitle={'aaaaa'}/>
      <ConclusionForm/>  
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3D9FF'
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 20,
  marginBottom: 20,
  color: '#30024A',
},
});

export default AddExpenseScreen;