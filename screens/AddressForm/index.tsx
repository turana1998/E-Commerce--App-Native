import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView ,Platform} from 'react-native';
import styles from './style';
import countrylist from 'country-list';
import Buttons from '../../components/Button'
const AddressForm = () => {
    const countrys = countrylist.getData();
    console.log(countrys);
    const [contry, setCounrty] = useState(countrys[0].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [adress, setAddress] = useState('');
    const [adresserror, setAddresserror] = useState('');
    const [adress2, setAddress2] = useState('');
    const [city, setCity] = useState('');

    const onCheckout = () => {

        if (adresserror) {
            Alert.alert("fix all errors")
        }
        if (!fullname) {
            Alert.alert("Please fill all inputs");
            return;
        }
        if (!phone) {
            Alert.alert("Please fill all inputs");
            return;
        }
        console.warn("sucsess")
    }

    const validate = () => {
        if (adress.length < 3) {
            setAddresserror("Address so short")
        }
        if (adress.length > 10) {
            setAddresserror("Address so long")
        }
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "android" ? 10 : 0}> 
            <ScrollView style={styles.root}>
                <View style={{ marginTop: 40 }}></View>
                <View style={styles.picker}>
                    <Picker
                        style={styles.picker} selectedValue={contry} onValueChange={setCounrty}>
                        {countrys.map(country => (
                            <Picker.Item
                                value={country.code}
                                label={country.name}>
                            </Picker.Item>
                        ))}
                    </Picker>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Full name (First and Last name)</Text>
                    <TextInput
                        value={fullname}
                        onChangeText={setFullname}
                        style={styles.input}
                        placeholder="Full Name">
                    </TextInput>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        style={styles.input}
                        placeholder="Phoone Number"
                        keyboardType='phone-pad'>
                    </TextInput>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        value={adress}
                        onChangeText={text => {
                            setAddress(text);
                            setAddresserror('')
                        }
                        }
                        onEndEditing={validate}
                        style={styles.input}
                        placeholder="Street address ">
                    </TextInput>
                    <TextInput
                        value={adress2}
                        onChangeText={setAddress2}
                        style={styles.input}
                        placeholder="Q.Qarayev 81 132 ">
                    </TextInput>
                    {!!adresserror && <Text style={styles.error}>{adresserror}</Text>}
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>City</Text>
                    <TextInput
                        value={city}
                        onChangeText={setCity}
                        style={styles.input}
                        placeholder="City">
                    </TextInput>
                </View>

                <Buttons text="Checkout" onPress={onCheckout} ></Buttons>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

export default AddressForm;