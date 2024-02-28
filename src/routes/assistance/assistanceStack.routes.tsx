import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Header } from '../../components/Header'
import { Assistance } from '../../screens/assistance/Assistance'
import { WithBasicInfo } from '../../screens/assistance/withDiagnosis/BasicData'
import { WithHistory } from '../../screens/assistance/withDiagnosis/History'
import { WithMeasurements } from '../../screens/assistance/withDiagnosis/Measurements'
import { WithResult } from '../../screens/assistance/withDiagnosis/Result'
import { BasicInfo } from '../../screens/assistance/withoutDiagnosis/BasicData'
import { FirstMeasurement } from '../../screens/assistance/withoutDiagnosis/FirstMeasurement'
import { History } from '../../screens/assistance/withoutDiagnosis/History'
import { Result } from '../../screens/assistance/withoutDiagnosis/Result'
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
        <Stack.Screen
          name="History"
          component={History}
        />
        <Stack.Screen
          name="FirstMeasurement"
          component={FirstMeasurement}
        />
        <Stack.Screen
          name="Result"
          component={Result}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          header: () => <Header title="Paciente com diagnóstico" />
        }}
      >
        <Stack.Screen
          name="WithBasicInfo"
          component={WithBasicInfo}
        />
        <Stack.Screen
          name="WithHistory"
          component={WithHistory}
        />
        <Stack.Screen
          name="WithMeasurements"
          component={WithMeasurements}
        />
        <Stack.Screen
          name="WithResult"
          component={WithResult}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
