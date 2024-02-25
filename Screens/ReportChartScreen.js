import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { PieChart } from "react-native-gifted-charts";

const customColors = {
    customred: '#D92424',
  };

const data = [
  { key: 'Alimentação', value: 45, color: 'brown', text: '45%'},
  { key: 'Moradia', value: 23, color: 'royalblue', text: '23%' },
  { key: 'Saúde', value: 25, color: 'limegreen', text: '25%' },
  { key: 'Escola', value: 7, color: 'gold', text: '7%' },
];

const ReportChartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.current_month}>Janeiro</Text>
      <View style={{alignItems: 'center', marginTop: "10%", marginBottom: "20%"}}>
      <PieChart
       data={data}
       showText
       textColor="black"
       fontWeight='bold'
       />
       </View>
      <View style={styles.header_container}>
        <Text style={styles.current_month}>Legenda</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <View style={[styles.circle, { backgroundColor: item.color }]} />
              <Text>{item.key}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '5%',
  },
  header_container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#F3D9FF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 'auto',
  },
  current_month: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#30024A',
    textAlign: 'center',
    marginBottom: "5%"
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default ReportChartScreen;
