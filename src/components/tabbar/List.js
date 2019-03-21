import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../child/Header';
import Card from '../child/Card';


export default class List extends Component {
  state = {
    cardData: {
      name: 'Apple',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81dfzyJih3L._SX466_.jpg',
      price: '5.000.000'
    }
  }
  render() {
    return (
      <View>
        <AppHeader 
            judul="List"
        />
        <ScrollView>
            <View style={styles.Content}>
              <Card
                  title={this.state.cardData.name}
                  productimage={this.state.cardData.img}
                  productprice={this.state.cardData.price}
              />
              <Card
                  title={this.state.cardData.name}
                  productimage={this.state.cardData.img}
                  productprice={this.state.cardData.price}
              />
            </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Content:{
      flex: 1,
      flexDirection: 'row',
      justifyContent:'center',
      flexWrap: 'wrap'
  }
})