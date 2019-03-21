import React from 'react';
import { View, ScrollView } from 'react-native';
import AppCard from './components/AppCard';
import CardPromo from './components/CardPromo';

import AppHeader from './components/child/Header'

class AppParent extends React.Component{
    render(){
        return(
            <View>
                <AppHeader
                    judul='Home'
                />
                <ScrollView >
                    <AppCard />
                    <CardPromo />
                </ScrollView>
            </View>
        )
    }
}
export default AppParent;
