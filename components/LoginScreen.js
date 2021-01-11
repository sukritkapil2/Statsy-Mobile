import axios from 'axios';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
    Alert.alert('Login Error', 'Please provide storage permission!', [
      {text: 'OK', onPress: () => console.log(e)},
    ]);
  }
};

class LoginScreen extends React.Component {
  state = {
    username: '',
    password: '',
  };

  enterClicked() {
    if (this.state.username.length === 0) {
      Alert.alert('Invalid Submission', 'Please enter your username!', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (this.state.password.length === 0) {
      Alert.alert('Invalid Submission', 'Please enter your password!', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      const user = {
        username: this.state.username,
        password: this.state.password,
      };
      axios
        .post('http://192.168.1.9:5000/user/login', user)
        .then((res) => {
          Alert.alert('Login Success', 'Your login is successful!', [
            {
              text: 'OK',
              onPress: () => {
                storeData('user-details', res.data)
                  .then(() => {
                    this.props.navigation.navigate('Welcome');
                  })
                  .catch(() => {
                    Alert.alert('Storage Error!', 'Error: Storage Error', [
                      {
                        text: 'OK',
                        onPress: () => console.log('Storage Error'),
                      },
                    ]);
                  });
              },
            },
          ]);
        })
        .catch((err) => {
          Alert.alert('Login Failure!', 'Error: ' + err.response.data.error, [
            {
              text: 'OK',
              onPress: () => console.log(err.response.data.error),
            },
          ]);
        });
    }
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
        <View style={{flex: 5, padding: 5}}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder="Enter your username"
            style={styles.textinput}
            onChangeText={(text) => {
              this.setState({
                username: text,
              });
            }}
            value={this.state.username}></TextInput>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.textinput}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
            value={this.state.password}
            secureTextEntry={true}></TextInput>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.enterClicked()}>
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
