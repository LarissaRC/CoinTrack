import { View, Text, Button } from 'react-native'
import React from 'react'

const CategoryManagerScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bom dia, grupo! Esta tela possui a função de gerenciar as tags de gastos da aplicação.</Text>
      <Text>Haverá tags pafrões, como transporte, alimentação, contas, etc. E será também posível criar novas tags.</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Voltar para Home"
      />
    </View>
  )
}

export default CategoryManagerScreen;