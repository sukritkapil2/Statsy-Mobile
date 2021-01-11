import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class GuideScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
        <View style={{flex: 3}}>
          <Text style={styles.question}>What is it?</Text>
          <Text style={styles.answer}>
            Statsy lets you share what you are currently doing with all your
            followers just like a broadcast.
          </Text>
          <Text style={{...styles.question, marginTop: 15}}>How it helps?</Text>
          <Text style={styles.answer}>
            Feeling alone? Send a join request to all your followers, who can
            then join you in your work whether it be play, study or anything!
            It’s fun!
          </Text>
          <Text style={{...styles.question, marginTop: 15}}>
            How to find friends?
          </Text>
          <Text style={styles.answer}>
            There are quite a number of ways. You can search their name. Or you
            can find people having similar interests. It is that flexible!
          </Text>
          <Text style={{...styles.question, marginTop: 15}}>
            How to ask friends if they wanna join?
          </Text>
          <Text style={styles.answer}>
            Statsy provides you with a magnet button. You click that and all
            your friends are notified that you really want someone to join them.
            You can even choose some of your friends if you want to!
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Text style={styles.buttonText}>Get Started!</Text>
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
    alignSelf: 'flex-end',
    flex: 1,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  question: {
    color: '#6B67FF',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  answer: {
    fontSize: 16,
    fontFamily: 'Montserrat-Light',
    marginTop: 5,
  },
});

export default GuideScreen;
