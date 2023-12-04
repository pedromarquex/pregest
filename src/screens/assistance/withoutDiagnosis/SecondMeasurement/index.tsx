import React, { useReducer } from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyText } from '../../../../components/BodyText'
import { Button } from '../../../../components/Button'
import { TextInput } from '../../../../components/TextInput'
import { Title } from '../../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../../routes/assistance/assistanceStack.types'

interface MeasurementsInfoState {
  secondRightArmDiastolic: string
  secondRightArmSystolic: string
  secondLeftArmDiastolic: string
  secondLeftArmSystolic: string
}

interface MeasurementsAction {
  type: 'SET_RIGHT_ARM_DIASTOLIC'
  | 'SET_RIGHT_ARM_SYSTOLIC'
  | 'SET_LEFT_ARM_DIASTOLIC'
  | 'SET_LEFT_ARM_SYSTOLIC'
  payload: any
}

export function SecondMeasurement ({ navigation, route }: AssistanceStackScreenProps<'BasicInfo'>): JSX.Element {
  const [state, dispatch] = useReducer((state: MeasurementsInfoState, action: MeasurementsAction) => {
    switch (action.type) {
      case 'SET_RIGHT_ARM_DIASTOLIC':
        return { ...state, secondRightArmDiastolic: action.payload }
      case 'SET_RIGHT_ARM_SYSTOLIC':
        return { ...state, secondRightArmSystolic: action.payload }
      case 'SET_LEFT_ARM_DIASTOLIC':
        return { ...state, secondLeftArmDiastolic: action.payload }
      case 'SET_LEFT_ARM_SYSTOLIC':
        return { ...state, secondLeftArmSystolic: action.payload }
      default:
        return state
    }
  }, {
    secondRightArmDiastolic: '',
    secondRightArmSystolic: '',
    secondLeftArmDiastolic: '',
    secondLeftArmSystolic: ''
  })

  const navigateToResult = (): void => {
    navigation.navigate('Result', {
      data: {
        ...route.params?.data,
        ...state
      }
    })
  }

  return (
    <Background
      contentContainerStyle={{ paddingTop: 36 }}
      bottom={
        <Button
          text='Ver resultado'
          onPress={navigateToResult}
          style={{ marginHorizontal: 20 }}
        />
      }
    >
      <Title text='Segundas Aferições' style={{ paddingTop: 0 }} />
      <BodyText text='Observação: Aguardar 15 minutos após a 1ª medida' />
      <BodyText text='Braço direito' style={{ marginBottom: 0 }} />
      <View style={styles.inputsLine}>
        <TextInput
          label="PAD"
          value={state.secondRightArmDiastolic}
          onChangeText={(text) => { dispatch({ type: 'SET_RIGHT_ARM_DIASTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
        <TextInput
          label="PAS"
          value={state.secondRightArmSystolic}
          onChangeText={(text) => { dispatch({ type: 'SET_RIGHT_ARM_SYSTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
      </View>
      <BodyText text='Braço esquerdo' style={{ marginBottom: 0 }} />
      <View style={styles.inputsLine}>
        <TextInput
          label="PAD"
          value={state.secondLeftArmDiastolic}
          onChangeText={(text) => { dispatch({ type: 'SET_LEFT_ARM_DIASTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
        <TextInput
          label="PAS"
          value={state.secondLeftArmSystolic}
          onChangeText={(text) => { dispatch({ type: 'SET_LEFT_ARM_SYSTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  inputsLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16
  }
})
