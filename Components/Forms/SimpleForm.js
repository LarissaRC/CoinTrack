import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SimpleForm = ({ formTitle }) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={formTitle}
        placeholderTextColor="#9FB5C8"
        onChangeText={setText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,

  },
  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default SimpleForm;
