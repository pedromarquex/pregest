import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Text, View } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '../@theme/colors'
import { fonts } from '../@theme/fonts'
import AboutActiveIcon from '../assets/icons/about-active-icon.svg'
import AboutIcon from '../assets/icons/about-icon.svg'
import AssistanceActiveIcon from '../assets/icons/assistance-active-icon.svg'
import AssistanceIcon from '../assets/icons/assistance-icon.svg'
import HomeActiveIcon from '../assets/icons/home-active-icon.svg'
import HomeIcon from '../assets/icons/home-icon.svg'
import { AboutStack } from './about/aboutStack.routes'
import { AssistanceStack } from './assistance/assistanceStack.routes'
import { HomeStack } from './home/homeStack.routes'

function About (): JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

interface tabIconProps {
  focused: boolean
  route: {
    name: string
  }
}

function tabIcon ({ focused, route }: tabIconProps): JSX.Element {
  if (route.name === 'HomeTab') {
    if (focused) {
      return <HomeActiveIcon width={16} height={18} />
    }
    return <HomeIcon width={16} height={18} />
  }
  if (route.name === 'AssistanceStack') {
    if (focused) {
      return <AssistanceActiveIcon width={16} height={18} />
    }
    return <AssistanceIcon width={16} height={18} />
  }
  if (route.name === 'AboutStack') {
    if (focused) {
      return <AboutActiveIcon width={16} height={18} />
    }
    return <AboutIcon width={16} height={18} />
  }
  return <></>
}

export function Tabs (): JSX.Element {
  const insets = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => tabIcon({ focused, route }),
        tabBarActiveTintColor: colors.mainPurple,
        tabBarInactiveTintColor: colors.gray4,
        tabBarLabelStyle: {
          fontFamily: fonts.medium,
          fontSize: 12,
          marginBottom: 10
        },
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#fff',
          height: 60 + insets.bottom,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          position: 'absolute'
        },
        tabBarItemStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: '#fff'
        }
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabel: 'Início',
          unmountOnBlur: true
        }}
      />
      <Tab.Screen
        name="AssistanceStack"
        component={AssistanceStack}
        options={{
          tabBarLabel: 'Direcionamento',
          unmountOnBlur: true
        }}
      />
      <Tab.Screen
        name="AboutStack"
        component={AboutStack}
        options={{
          tabBarLabel: 'Sobre',
          unmountOnBlur: true
        }}
      />
    </Tab.Navigator>
  )
}
