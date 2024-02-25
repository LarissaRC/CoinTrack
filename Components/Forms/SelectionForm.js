import React from 'react';
import { StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const SelectionForm = ({ formTitle, data }) => {
    return (
        <SelectDropdown
            data={data}
            defaultButtonText={formTitle}
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
    );
};

const styles = StyleSheet.create({
    dropdown1BtnStyle: {
        height: 45,
        width: 330, // Definindo a largura desejada
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
    },
    dropdown1BtnTxtStyle: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#9FB5C8',
        textAlign: 'left',
    },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
});

export default SelectionForm;
