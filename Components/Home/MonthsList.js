import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React from 'react'

const MonthsList = ({ handleMonthPress }) => {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    return (
        <ScrollView>
            <View style={styles.container}>
                {months.map((month, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={handleMonthPress}
                    style={{ flex: 1, width: '100%'}}>
                    <View style={styles.monthItem}>
                        <Text style={{ marginLeft: 20}}>{month}</Text>
                    </View>
                </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    monthItem: {
        width: '100%',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
  });

export default MonthsList;