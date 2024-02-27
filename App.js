import * as React from 'react'; import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Pessoas em q confio</Text>
<Button
title="Pessoas 1"
onPress={() => navigation.navigate('Details')} />
<Button
title="Pessoas 2"
onPress={() => navigation.navigate('Details1')} />
</View>

 );
}


function DetailsScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Isabellinha Almeidinha</Text>
<View>
        <Text>pq eu confio nela?</Text>
        <Text>1-Linda</Text>
        <Text>O que eu quero que ela imite?</Text>
        <Text>Canguru do retiro</Text>
        {/* Adicione mais motivos conforme necessário */}
      </View>
<Button title="Go to Home" onPress={() => navigation.navigate('Home')}  />

</View>
);
}
function DetailsScreen1({ navigation }) {
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Vitinho Cabeçudinho</Text>
  <View>
          <Text>pq eu confio nele?</Text>
          <Text>1-Eminem</Text>
          <Text>O que eu quero que ela imite?</Text>
          <Text>Faiska</Text>
          {/* Adicione mais motivos conforme necessário */}
        </View>
  <Button title="Go to Home" onPress={() => navigation.navigate('Home')}  />
  
  </View>
  );
  }






const Stack = createNativeStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Details" component={DetailsScreen} />
<Stack.Screen name="Details1" component={DetailsScreen1} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;

