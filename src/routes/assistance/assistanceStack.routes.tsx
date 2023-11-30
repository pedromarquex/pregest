import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Header } from '../../components/Header'
import { Assistance } from '../../screens/assistance/Assistance'
import { BasicInfo } from '../../screens/assistance/withoutDiagnosis/BasicData'
import { type AssistanceStackParamList } from './assistanceStack.types'

const Stack = createStackNavigator<AssistanceStackParamList>()

export function AssistanceStack (): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Assistance"
        component={Assistance}
        options={{ headerShown: false }}
      />
      <Stack.Group
        screenOptions={{
          header: () => <Header title="Paciente sem diagnóstico" />
        }}
      >
        <Stack.Screen
          name="BasicInfo"
          component={BasicInfo}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
