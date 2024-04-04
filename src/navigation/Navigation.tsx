import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import theme from '../utils/theme';
import { AddProduct } from '../screens/addProduct';

const Stack = createNativeStackNavigator();

export function Navigation() {
    return (
        <NavigationContainer>
            <ThemeProvider theme={theme}>
                <SafeAreaView style={{ flex: 1, backgroundColor:theme.colors.blueLight }}>
                    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="AddProduct" component={AddProduct} />
                    </Stack.Navigator>
                </SafeAreaView>
            </ThemeProvider>
        </NavigationContainer>
    );
}

