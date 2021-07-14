import React from 'react';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import PaginaFake from './src/pages/PaginaFake';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createStackNavigator();
const Tab =  createMaterialBottomTabNavigator()

const HomeTabs = () =>{
    return (
        <Tab.Navigator 
        initialRouteName='Home'
        activeColor={'#fff'}
        shifting={false}
        barStyle={{backgroundColor:'#141414'}}
        >
            <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
                tabBarLabel:'Início',
                tabBarIcon: ({color}) => (
                    <Icon name='home' color={color} size={15} />
                )
            }}
            />
            <Tab.Screen 
            name='buscar' 
            component={PaginaFake}
            options={{
                tabBarLabel:'Buscar',
                tabBarIcon: ({color}) => (
                    <Icon name='magnify' color={color} size={15} />
                )
            }}
            />
            <Tab.Screen 
            name='em-breve' 
            component={PaginaFake}
            options={{
                tabBarLabel:'Em Breve',
                tabBarIcon: ({color}) => (
                    <Icon name='play-speed' color={color} size={15} />
                )
            }}
            />
            <Tab.Screen 
            name='download' 
            component={PaginaFake}
            options={{
                tabBarLabel:'Downloads',
                tabBarIcon: ({color}) => (
                    <Icon name='download' color={color} size={15} />
                )
            }}
            />
            <Tab.Screen 
            name='mais' 
            component={PaginaFake}
            options={{
                tabBarLabel:'Mais',
                tabBarIcon: ({color}) => (
                    <Icon name='menu' color={color} size={26} />
                )
            }}
            />
        </Tab.Navigator>
    );
}

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen 
                options={{headerShown: false}} 
                name='Login' 
                component={Login}/>

                <Stack.Screen 
                options={{headerShown: false}} 
                name='Home' 
                component={HomeTabs}/>
            </Stack.Navigator>
        
        </NavigationContainer>
    );
}
export default Routes;