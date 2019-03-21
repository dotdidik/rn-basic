import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class Card extends Component {
  render() {
    return (
        <View style={styles.Card} key={this.props.key}>
            <Text style={styles.ProductTitle}>{this.props.title}</Text>
            <Image
                style={styles.ImagesCard}
                source={{uri: this.props.productimage}}
            />
            <Text style={{color: 'red'}}>
                Rp. {this.props.productprice}
            </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    Card:{
        width: 140,
        height: 200,
        backgroundColor: 'white',
        margin: 10,
        alignItems: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black'
    },
    ProductTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        padding: 5,
        textAlignVertical: 'center',
        color: 'blue'
    },
    ImagesCard: {
        width: '90%',
        height: 120
    }
})