import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/AppNavigator/AppNavigator';
import Store from './app/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
