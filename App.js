import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChannelScreen, DirectMessagesScreen, SettingsScreen } from './screens';
import { ThemeProvider } from './context/ThemeContext';
import { styles } from './styles';

const Tab = createBottomTabNavigator();

const ChatHub = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Channels" component={ChannelScreen} />
          <Tab.Screen name="Direct Messages" component={DirectMessagesScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default ChatHub;