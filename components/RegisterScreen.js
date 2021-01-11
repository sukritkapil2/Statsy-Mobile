import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import axios from 'axios';

class RegisterScreen extends React.Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    usernameMessage: 'Please enter a username',
    colorCode: '#6B67FF',
    available: false,
  };

  registerClicked() {
    if (this.state.available && this.state.username.length === 0) {
      Alert.alert('Submission Error', 'Please enter a valid username', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (this.state.password.length === 0) {
      Alert.alert('Submission Error', 'Please enter a password', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (this.state.password !== this.state.confirmPassword) {
      Alert.alert('Submission Error', 'Two passwords do not match', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      const newUser = {
        username: this.state.username,
        password: this.state.password,
        name: this.props.route.params.name,
        phone: this.props.route.params.phone,
        email: this.props.route.params.email,
      };
      axios
        .post('http://192.168.1.9:5000/user/register', newUser)
        .then((res) => {
          Alert.alert(
            'Account Success!',
            'Account has been created successfully!',
            [
              {
                text: 'OK',
                onPress: () => this.props.navigation.navigate('Login'),
              },
            ],
          );
        })
        .catch((err) => {
          Alert.alert('Database Error', 'Error: ' + err.response.data.error, [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        });
    }
  }

  usernameChanged() {
    //console.log('state: ', this.state.username);
    const text = this.state.username;
    if (text.length !== 0) {
      axios
        .get('http://192.168.1.9:5000/user/check/' + text)
        .then((res) => {
          //console.log(res.data);
          this.setState({
            usernameMessage: 'Username available!',
            colorCode: 'green',
            available: true,
          });
        })
        .catch((err) => {
          console.log(err.response);
          this.setState({
            usernameMessage: 'Username already taken!',
            colorCode: 'red',
            available: false,
          });
        });
    } else {
      this.setState({
        usernameMessage: 'Please enter a username',
        colorCode: '#6B67FF',
        available: false,
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
              this.setState(
                {
                  username: text,
                },
                () => this.usernameChanged(),
              );
            }}
            value={this.state.username}></TextInput>
          <Text
            style={{
              color: this.state.colorCode,
              fontFamily: 'Montserrat-Light',
              marginTop: 10,
            }}>
            {this.state.usernameMessage}
          </Text>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.textinput}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
            value={this.state.password}></TextInput>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            placeholder="Enter your password again"
            style={styles.textinput}
            onChangeText={(text) => {
              this.setState({
                confirmPassword: text,
              });
            }}
            value={this.state.confirmPassword}
            secureTextEntry={true}></TextInput>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.registerClicked.bind(this)}>
            <Text style={styles.buttonText}>Register</Text>
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

export default RegisterScreen;
