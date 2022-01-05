import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import WelcomeScreen from './screens/WelcomeScreen';
import RecommemdedScreen from "./screens/new/RecommendedScreen";
import SuccessfullPayment from './screens/new/SuccessfullPayment';
import SplitBills from './screens/new/SplitBillScreen';
import FoodScreen from './screens/new/FoodScreen';
import CreateNewBill from './screens/CreateNewBillScreen';
import Scanner from './screens/new/components/Scanner';
import CreateNewEvent from './screens/new/NewEventScreen';
import Profile from './screens/new/Profile';
import Profileedit from './screens/new/Profileedit';



const Stack = createNativeStackNavigator();



const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{
          headerShown:false,
        }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="Recommended" component={RecommemdedScreen}/>
          <Stack.Screen name="SuccessfullPayment" component={SuccessfullPayment}/>
          <Stack.Screen name="SplitBills" component={SplitBills}/>
          <Stack.Screen name="Food" component={FoodScreen}/>
          <Stack.Screen name="CreateNewBill" component={CreateNewBill}/>
          <Stack.Screen name="Scanner" component={Scanner}/>
          <Stack.Screen name="createNewEvent" component={CreateNewEvent}/>
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="Profileedit" component={Profileedit}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
