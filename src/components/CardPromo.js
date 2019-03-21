import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native';

class CardPromo extends Component {
    state = {
        users:[
            {
                "name": "Proxima Midnight",
                "email": "proxima@appdividend.com"
            },
            {
                "name": "Ebony Maw",
                "email": "ebony@appdividend.com"
            },
            {
                "name": "Black Dwarf",
                "email": "dwarf@appdividend.com"
            },
            {
                "name": "Mad Titan",
                "email": "thanos@appdividend.com"
            },
            {
                "name": "Supergiant",
                "email": "supergiant@appdividend.com"
            },
            {
                "name": "Loki",
                "email": "loki@appdividend.com"
            },
            {
                "name": "corvus",
                "email": "corvus@appdividend.com"
            },
            {
                "name": "Proxima Midnight",
                "email": "proxima1@appdividend.com"
            },
            {
                "name": "Ebony Maw",
                "email": "ebony1@appdividend.com"
            },
            {
                "name": "Black Dwarf",
                "email": "dwarf1@appdividend.com"
            },
            {
                "name": "Mad Titan",
                "email": "thanos1@appdividend.com"
            },
            {
                "name": "Supergiant",
                "email": "supergiant1@appdividend.com"
            },
            {
                "name": "Loki",
                "email": "loki1@appdividend.com"
            },
            {
                "name": "corvus",
                "email": "corvus1@appdividend.com"
            }
        ]
    }
    render(){
        const { users } = this.state
        return(
            <View>
                <Text>User</Text>
                <FlatList
                    data={users}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>
                    <View style={styles.flatview}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.email}>{item.email}</Text>
                    </View>
                    }
                    keyExtractor={item => item.email}
                />
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
        width: '42%',
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
    },
    flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
      },
      name: {
        fontFamily: 'Verdana',
        fontSize: 18
      },
      email: {
        color: 'red'
      }
})

export default CardPromo;
