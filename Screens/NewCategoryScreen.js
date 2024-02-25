import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SimpleForm from '../Components/Forms/SimpleForm'
import DescriptionForm from '../Components/Forms/DescriptionForm'
import ConclusionForm from '../Components/Forms/ConclusionForm'
import SelectionForm from '../Components/Forms/SelectionForm'

const NewCategoryScreen = ({ navigation }) => {

  const categories = ["Vermelho", "Azul", "Verde", "Amarelo", "Laranja", "Roxo", "Ciano"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Categoria</Text>
      <View style={{width: "90%", alignItems: 'center'}}>
      <SimpleForm formTitle={'Nome'}/>
      <SelectionForm formTitle={'Cor'} data={categories} />
      <DescriptionForm formTitle={'Descrição'}/>

      </View>
      <View style={{width: "90%", alignItems: 'center', marginTop: "50%"}}>
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

export default NewCategoryScreen;