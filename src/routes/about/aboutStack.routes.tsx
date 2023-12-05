import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Header } from '../../components/Header'
import { About } from '../../screens/about/About'
import { AboutApp } from '../../screens/about/AboutApp'
import { Developers } from '../../screens/about/Developers'
import { type AboutStackParamList } from './aboutStack.types'

const Stack = createStackNavigator<AboutStackParamList>()

export function AboutStack (): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutApp"
        component={AboutApp}
        options={
          {
            header: () => <Header title="Sobre o PreGest" />
          }
        }
      />
      <Stack.Screen
        name="Developers"
        component={Developers}
        options={
          {
            header: () => <Header title="Desenvolvedoras" />
          }
        }
      />
    </Stack.Navigator>
  )
}
