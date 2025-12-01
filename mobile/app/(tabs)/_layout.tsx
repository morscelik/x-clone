
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '@clerk/clerk-expo';

const TabsLayout = () => {
    const insets = useSafeAreaInsets();
   const { isSignedIn } = useAuth();
    if (!isSignedIn) <Redirect href={'/(auth)'} />
  return (
    <Tabs 
    screenOptions={{
        tabBarActiveTintColor: '#1DA1F2',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            elevation: 5,
            height: 50 + insets.bottom,
            paddingBottom: 5,
        },
        headerShown: false,
    }}>
        <Tabs.Screen
            name="index"
            options={{
                title:"",
            tabBarIcon:({ color, size })=> <Feather name="home" color={color} size={size} />,
            }}
        />
        <Tabs.Screen
            name="search"
            options={{
                title:"",
            tabBarIcon:({ color, size })=> <Feather name="search" color={color} size={size} />,
            }}
        />
        <Tabs.Screen
            name="notification"
            options={{
                title:"",
            tabBarIcon:({ color, size })=> <Feather name="bell" color={color} size={size} />,
            }}
        />
        <Tabs.Screen
            name="messages"
            options={{
                title:"",
            tabBarIcon:({ color, size })=> <Feather name="mail" color={color} size={size} />,
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title:"",
            tabBarIcon:({ color, size })=> <Feather name="user" color={color} size={size} />,
            }}
        />
      
    </Tabs>
  )
}

export default TabsLayout