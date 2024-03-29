import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SimpleForm from '../Components/Forms/SimpleForm'
import DateForm from '../Components/Forms/DateForm'
import DescriptionForm from '../Components/Forms/DescriptionForm'
import ConclusionForm from '../Components/Forms/ConclusionForm'
import SelectionForm from '../Components/Forms/SelectionForm'

const AddExpenseScreen = ({ navigation }) => {

  const categories = ["Todos", "Alimentação", "Transporte", "Compras"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Gasto</Text>
      <View style={{width: "90%", alignItems: 'center'}}>
      <SelectionForm formTitle={'Selecione a Categoria'} data={categories} />
      <SimpleForm formTitle={'Título do Gasto'}/>
      <DateForm formTitle={'Data'}/>
      <SimpleForm formTitle={'Local'}/>
      <SimpleForm formTitle={'Valor'}/>
      <DescriptionForm formTitle={'Descrição'}/>
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