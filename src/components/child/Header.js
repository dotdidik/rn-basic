import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class AppHeader extends Component {
  render() {
    return (
        <View style={styles.Container}>
            <Text style={styles.ColorText}>{ this.props.judul }</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor: 'grey',
        height: 60,
        flex:0,
        justifyContent: "center",
        alignItems: "center"
    },
    ColorText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlignVertical: 'center'
    }
})

