import React from 'react';
import {StyleSheet} from 'react-native';

import {BottomNavigation, Text, FAB} from 'react-native-paper';

import Home from './src/screens/home';
import Expenses from './src/screens/expenses';
import Shop from './src/screens/shop';

const RecentsRoute = () => <Text>Recents</Text>;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: 'Home',
        title: 'Home',
        icon: 'home',
      },
      {
        key: 'Shop',
        title: 'Shop',
        icon: 'shopping',
      },
      {
        key: 'Expenses',
        title: 'Gastos',
        icon: 'bank',
      },
      {
        key: 'Profile',
        title: 'Perfil',
        icon: 'account-circle',
      },
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    Home: Home,
    Shop: Shop,
    Expenses: Expenses,
    Profile: RecentsRoute,
  });

  render() {
    return (
      <>
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
          activeColor="#6FB6C4"
          inactiveColor="#DADADA"
          barStyle={{backgroundColor: '#fff'}}
        />
        <FAB
          icon="whatsapp"
          onPress={() => console.log('Pressed')}
          style={styles.container}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 70,
    right: 40,
    backgroundColor: '#2f3340',
    zIndex: 999999,
  },
});
