import React from 'react';
import Container from './components/Container';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthorScreen from './components/AuthorScreen';
import PostScreen from './components/PostScreen';
import { Provider } from 'react-redux';
import store from './redux/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Container>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={AuthorScreen}
              options={{
                title: 'Authors',
                headerStyle: {
                  backgroundColor: '#fff',
                },
              }}
            />
            <Stack.Screen
              name="Posts"
              component={PostScreen}
              options={({ route }) => ({
                title: `${route.params.name}'s Posts`,
              })}
            />
          </Stack.Navigator>
        </Container>
      </NavigationContainer>
    </Provider>
  );
}
