import React, { Component } from 'react'
import { View, Text } from 'react-native';
import AppHeader from '../child/Header'
class Profile extends Component {
  render() {
    return (
      <View>
      <AppHeader
        judul='Profile'
      />
        <Text>I am Profile Screen</Text>
      </View>
    )
  }
}

export default Profile;
