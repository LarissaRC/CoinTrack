import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateForm = ({ formTitle }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
    setText(formatDate(currentDate)); // Format the date as needed
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={formTitle}
        placeholderTextColor="#9FB5C8"
        onFocus={showDatepicker}
        value={text}
      />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
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

export default DateForm;
