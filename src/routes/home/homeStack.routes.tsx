import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Header } from '../../components/Header'
import { Definition } from '../../screens/Definition'
import { Home } from '../../screens/Home'
import { Classification } from '../../screens/classification/Classification'
import { Exams } from '../../screens/exams/Exams'
import { BioProfile } from '../../screens/exams/images/BioProfile'
import { Cardiotocography } from '../../screens/exams/images/Cardiotocography'
import { Dopplervelocimetry } from '../../screens/exams/images/Dopplervelocimetry'
import { Images } from '../../screens/exams/images/Images'
import { Ultrasson } from '../../screens/exams/images/Ultrasson'
import { Bilirubin } from '../../screens/exams/laboratory/Bilirubin'
import { Creatinine } from '../../screens/exams/laboratory/Creatinine'
import { Desidrogenase } from '../../screens/exams/laboratory/Desidrogenase'
import { Hemogram } from '../../screens/exams/laboratory/Hemogram'
import { Laboratory } from '../../screens/exams/laboratory/Laboratory'
import { Proteinury } from '../../screens/exams/laboratory/Proteinury'
import { TransaminaseGlutamicoOxalacetica } from '../../screens/exams/laboratory/TransaminaseGlutamicoOxalacetica'
import { TransaminasePiruvica } from '../../screens/exams/laboratory/TransaminasePiruvica'
import { Urea } from '../../screens/exams/laboratory/Urea'
import { type RootStackParamList } from './homeStack.types'

const Stack = createStackNavigator<RootStackParamList>()

export function HomeStack (): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Definition"
        component={Definition}
        options={{
          header: () => <Header title="Conceito e Diagnóstico" />
        }}
      />
      <Stack.Screen
        name="Classification"
        component={Classification}
        options={{
          header: () => <Header title="Classificação da Pressão Arterial​" />
        }}
      />
      <Stack.Group>
        <Stack.Screen
          name="Exams"
          component={Exams}
          options={{
            header: () => <Header title="Exames" />
          }}
        />
        <Stack.Group
          screenOptions={{
            header: () => <Header title="Exames Laboratoriais" />
          }}
        >
          <Stack.Screen
            name="Laboratory"
            component={Laboratory}
          />
          <Stack.Screen
            name="Hemogram"
            component={Hemogram}
          />
          <Stack.Screen
            name="Creatinine"
            component={Creatinine}
          />
          <Stack.Screen
            name="Desidrogenase"
            component={Desidrogenase}
          />
          <Stack.Screen
            name="Bilirubin"
            component={Bilirubin}
          />
          <Stack.Screen
            name="Urea"
            component={Urea}
          />
          <Stack.Screen
            name="TransaminaseGlutamicoOxalacetica"
            component={TransaminaseGlutamicoOxalacetica}
          />
          <Stack.Screen
            name="TransaminasePiruvica"
            component={TransaminasePiruvica}
          />
          <Stack.Screen
            name="Proteinury"
            component={Proteinury}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            header: () => <Header title="Exames de Imagem" />
          }}
        >
          <Stack.Screen
            name="Images"
            component={Images}
          />
          <Stack.Screen
            name="Ultrasson"
            component={Ultrasson}
          />
          <Stack.Screen
            name="Dopplervelocimetry"
            component={Dopplervelocimetry}
          />
          <Stack.Screen
            name="BioProfile"
            component={BioProfile}
          />
          <Stack.Screen
            name="Cardiotocography"
            component={Cardiotocography}
          />
        </Stack.Group>
      </Stack.Group>
    </Stack.Navigator>
  )
}
