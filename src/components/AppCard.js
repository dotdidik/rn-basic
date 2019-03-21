import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Card from './child/Card'
class AppCard extends Component {
    state = {
        products:[
            {
                name: 'Xiaomi',
                pic: 'https://i.gadgets360cdn.com/products/large/1545639106_635_xiaomi_mi_play.jpg',
                price: 300000
            },
            {
                name: 'Xiaomi',
                pic: 'https://i.gadgets360cdn.com/products/large/1545639106_635_xiaomi_mi_play.jpg',
                price: 300000,
            },
            {
                name: 'Nexus',
                pic: 'https://images-na.ssl-images-amazon.com/images/I/81dfzyJih3L._SX466_.jpg',
                price: 900000,
            },
            {
                name: 'Xiaomi',
                pic: 'https://i.gadgets360cdn.com/products/large/1545639106_635_xiaomi_mi_play.jpg',
                price: 300000
            },
            {
                name: 'Xiaomi',
                pic: 'https://i.gadgets360cdn.com/products/large/1545639106_635_xiaomi_mi_play.jpg',
                price: 300000
            },
            {
                name: 'Nexus',
                pic: 'https://images-na.ssl-images-amazon.com/images/I/81dfzyJih3L._SX466_.jpg',
                price: 900000
            }
        ],
        posts: [],
        loading: true
    }
    render(){
        const { products } = this.state
        return(
            <View>
                <Text>Products</Text>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                <View style={styles.Content}>
                    {
                        products.map((product, index)=>
                            <View key={index}>
                                <Card
                                    title={product.name}
                                    productimage={product.pic}
                                    productprice={product.price}
                                />
                            </View>
                        )
                    }
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Content:{
        flex: 0,
        flexDirection: 'row',
        justifyContent:'center',
        flexWrap: 'wrap'
    },
    Card:{
        width: 200,
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

export default AppCard;
