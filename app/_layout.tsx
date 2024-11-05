//  import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // 예를 들어, HomeScreen이 있다고 가정
import CaptureFootSizeScreen from './screens/CaptureFootSizeScreen';
import LoadingScreen from './screens/LoadingScreen';
import MeasurePressureScreen from './screens/MeasurePressureScreen';
import RecommendShoeScreen from './screens/RecommendShoeScreen';

const Stack = createStackNavigator();

const RootLayout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="MeasurePressure" component={MeasurePressureScreen} />
        <Stack.Screen name="CaptureFootSize" component={CaptureFootSizeScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} /> */}
        <Stack.Screen name="RecommendShoe" component={RecommendShoeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootLayout;