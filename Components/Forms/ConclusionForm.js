import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ConclusionForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Concluído</Text>
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
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: 10
    },
    texts: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#30024A',
    }
  });

export default ConclusionForm;
