import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class LandingScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
        <View style={{flex: 3}}>
          <Text style={styles.heading}>
            Be Open.{'\n'}
            <Text style={{color: '#6B67FF'}}>
              Share what you're upto with Statsy.
            </Text>
          </Text>
          <Text style={styles.subheading}>
            Connecting you, whenever you want.
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Start Guide');
            }}>
            <Text style={styles.buttonText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    fontFamily: 'Montserrat-Bold',
    padding: 10,
    color: '#535353',
  },
  subheading: {
    fontSize: 20,
    fontFamily: 'Montserrat-Light',
    padding: 10,
    color: '#535353',
  },
  button: {
    backgroundColor: '#6B67FF',
    height: 50,
    alignItems: 'center',
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    alignSelf: 'flex-end',
    flex: 1,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
});

export default LandingScreen;
