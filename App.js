import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BMICalculatorScreen from './screen/BMICalculatorScreen.js';
import BMIResultScreen from './screen/BMIResultScreen.js';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="BMICalculator"
          component={BMICalculatorScreen}
          options={{ title: 'BMI Calculator' }}
        />

        <Stack.Screen
          name="BMIResult"
          component={BMIResultScreen}
          options={{ title: 'BMI Result' }}
        />

      </Stack.Navigator>

      <StatusBar style="auto" />

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
