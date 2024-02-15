import { View, Text, Button } from 'react-native'
import React from 'react'

const ExpensesReportScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  )
}

export default ExpensesReportScreen;