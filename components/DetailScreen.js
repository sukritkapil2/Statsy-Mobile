import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
        <View style={{flex: 5, padding: 5}}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Enter your name"
            style={styles.textinput}></TextInput>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            placeholder="Enter your phone"
            style={styles.textinput}></TextInput>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.textinput}></TextInput>
          <Text
            style={{
              color: '#535353',
              fontFamily: 'Montserrat-Light',
              marginTop: 10,
            }}>
            This email will be used for all notifications and password
            reminders.
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6B67FF',
    height: 50,
    alignItems: 'center',
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    flex: 1,
    marginBottom: 20,
    alignSelf: 'stretch',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  label: {
    color: '#535353',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    marginTop: 20,
  },
  textinput: {
    borderColor: '#6B67FF',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
});

export default DetailScreen;
