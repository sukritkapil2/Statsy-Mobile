import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

class DetailScreen extends React.Component {
  state = {
    name: '',
    phone: '',
    email: '',
  };

  nextClicked() {
    if (this.state.name.length === 0) {
      Alert.alert('Submission Error', 'Please enter your name', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (this.state.phone.length === 0) {
      Alert.alert('Submission Error', 'Please enter your phone', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (this.state.email.length === 0) {
      Alert.alert('Submission Error', 'Please enter your email', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else
      this.props.navigation.navigate('Register', {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
      });
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
        <View style={{flex: 5, padding: 5}}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Enter your name"
            style={styles.textinput}
            value={this.state.name}
            onChangeText={(text) => {
              this.setState({
                name: text,
              });
            }}></TextInput>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            placeholder="Enter your phone"
            style={styles.textinput}
            value={this.state.phone}
            onChangeText={(text) => {
              this.setState({
                phone: text,
              });
            }}
            keyboardType="numeric"></TextInput>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.textinput}
            value={this.state.email}
            onChangeText={(text) => {
              this.setState({
                email: text,
              });
            }}></TextInput>
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
            onPress={this.nextClicked.bind(this)}>
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
