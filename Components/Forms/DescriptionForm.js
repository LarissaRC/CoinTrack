import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const DescriptionForm = ({formTitle}) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={formTitle}
        placeholderTextColor="#9FB5C8"
        onChangeText={setText}
        value={text}
        multiline={true} 
        textAlignVertical="top" // Alinhar o texto ao topo
        textAlign="left" // Alinhar o texto à esquerda
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 200,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
});

export default DescriptionForm;
