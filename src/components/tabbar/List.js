import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import AppHeader from '../child/Header';
import Card from '../child/Card';


export default class List extends Component {
  state = {
    cardData: [
      {
        id: '001',
        name: 'Apple',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81dfzyJih3L._SX466_.jpg',
        price: '5.000.000'
      },
      {
        id: '002',
        name: 'Apple',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81dfzyJih3L._SX466_.jpg',
        price: '5.000.000'
      },
      {
        id: '003',
        name: 'Apple',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81dfzyJih3L._SX466_.jpg',
        price: '5.000.000'
      },
      {
        id: '004',
        name: 'Apple',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81dfzyJih3L._SX466_.jpg',
        price: '5.000.000'
      },
      {
        id: '005',
        name: 'Apple',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81dfzyJih3L._SX466_.jpg',
        price: '5.000.000'
      },
      {
        id: '006',
        name: 'Apple',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81dfzyJih3L._SX466_.jpg',
        price: '5.000.000'
      },
      {
        id: '007',
        name: 'Apple',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81dfzyJih3L._SX466_.jpg',
        price: '5.000.000'
      }
    ]
  }
  render() {
    const { cardData } = this.state
    return (
      <View>
        <AppHeader 
            judul="List"
        />
              <View>
              <FlatList
                  data={cardData}
                  renderItem={ ({item}) =>
                    <Card
                        title={item.name}
                        productimage={item.img}
                        productprice={item.price}
                    />
                  }
                  keyExtractor={item => item.id}
              />
              </View>
            </View>
    )
  }
}
