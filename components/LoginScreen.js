import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
        <View style={{flex: 5, padding: 5}}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder="Enter your username"
            style={styles.textinput}></TextInput>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.textinput}></TextInput>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 2}}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                alignSelf: 'center',
                color: '#6B67FF',
                fontFamily: 'Montserrat-Bold',
                fontSize: 16,
              }}
              onPress={() => {
                this.props.navigation.navigate('Personal Info');
              }}>
              New here? Make an account!
            </Text>
          </View>
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

export default LoginScreen;
