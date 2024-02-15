import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ExpenseItem from '../Components/MonthlyExpenses/ExpenseItem';
import { ScrollView } from 'react-native-gesture-handler';

const MonthlyExpensesScreen = () => {
    
    const categories = ["Todos", "Alimentação", "Transporte", "Compras"];

    return (
        <View style={styles.container}>
            <Text style={styles.title_text}>Extrato de Janeiro</Text>

            <View style={styles.header_container}>
                <Text style={styles.header_text}>Filtrar por categoria</Text>
                <SelectDropdown
                    data={categories}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{width: "100%", alignItems: 'center'}}>
                    <ExpenseItem expenseTitle={'Almoço'} expenseValue={1.8} />
                    <ExpenseItem expenseTitle={'Ônibus'} expenseValue={4.5} />
                    <ExpenseItem expenseTitle={'Lanche'} expenseValue={5} />
                    <ExpenseItem expenseTitle={'Conta do celular'} expenseValue={54.9} />
                    <ExpenseItem expenseTitle={'Brigadeiro'} expenseValue={3} />
                    <ExpenseItem expenseTitle={'Steam'} expenseValue={10.9} />
                    <ExpenseItem expenseTitle={'Rodízio'} expenseValue={44} />
                    <ExpenseItem expenseTitle={'Recarga'} expenseValue={100} />
                    <ExpenseItem expenseTitle={'Ração do cachorro'} expenseValue={30} />
                    <ExpenseItem expenseTitle={'Uber'} expenseValue={12.8} />
                    <ExpenseItem expenseTitle={'Lazer'} expenseValue={120} />
                    <ExpenseItem expenseTitle={'Janta'} expenseValue={1.8} />
                    <ExpenseItem expenseTitle={'Dívida com colega'} expenseValue={5} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F3D9FF'
    },
    title_text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#30024A',
    },
    header_container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    header_text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#30024A',
    },
    dropdown1BtnStyle: {
        height: 35,
        backgroundColor: '#FFF',
        borderRadius: 8,
      },
      dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
      dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
      dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
      dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  });

export default MonthlyExpensesScreen