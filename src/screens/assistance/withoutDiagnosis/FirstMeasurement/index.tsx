import React, { useReducer } from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyText } from '../../../../components/BodyText'
import { Button } from '../../../../components/Button'
import { TextInput } from '../../../../components/TextInput'
import { Title } from '../../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../../routes/assistance/assistanceStack.types'

export interface MeasurementsInfoState {
  weight: string
  height: string
  rightArmDiastolic: string
  rightArmSystolic: string
  leftArmDiastolic: string
  leftArmSystolic: string
}

interface MeasurementsAction {
  type: 'SET_WEIGHT'
  | 'SET_HEIGHT'
  | 'SET_RIGHT_ARM_DIASTOLIC'
  | 'SET_RIGHT_ARM_SYSTOLIC'
  | 'SET_LEFT_ARM_DIASTOLIC'
  | 'SET_LEFT_ARM_SYSTOLIC'
  payload: any
}

export function FirstMeasurement ({ navigation, route }: AssistanceStackScreenProps<'BasicInfo'>): JSX.Element {
  const [state, dispatch] = useReducer((state: MeasurementsInfoState, action: MeasurementsAction) => {
    switch (action.type) {
      case 'SET_HEIGHT':
        return { ...state, height: action.payload }
      case 'SET_WEIGHT':
        return { ...state, weight: action.payload }
      case 'SET_RIGHT_ARM_DIASTOLIC':
        return { ...state, rightArmDiastolic: action.payload }
      case 'SET_RIGHT_ARM_SYSTOLIC':
        return { ...state, rightArmSystolic: action.payload }
      case 'SET_LEFT_ARM_DIASTOLIC':
        return { ...state, leftArmDiastolic: action.payload }
      case 'SET_LEFT_ARM_SYSTOLIC':
        return { ...state, leftArmSystolic: action.payload }
      default:
        return state
    }
  }, {
    weight: '',
    height: '',
    rightArmDiastolic: '',
    rightArmSystolic: '',
    leftArmDiastolic: '',
    leftArmSystolic: ''
  })

  const navigateToSecond = (): void => {
    navigation.navigate('SecondMeasurement', {
      data: {
        ...route.params?.data,
        ...state
      }
    })
  }

  return (
    <Background
      contentContainerStyle={{ paddingTop: 36, paddingBottom: 150 }}
      bottom={
        <Button
          text='Continuar →'
          onPress={navigateToSecond}
          style={{ marginHorizontal: 20 }}
        />
      }
    >
      <Title text='Primeiras Aferições' style={{ paddingTop: 0 }} />
      <View style={styles.inputsLine}>
        <TextInput
          label="Peso"
          value={state.weight}
          onChangeText={(text) => { dispatch({ type: 'SET_WEIGHT', payload: text }) }}
          keyboardType='numeric'
          leftHint='Kg'
        />
        <TextInput
          label="Altura"
          value={state.height}
          onChangeText={(text) => { dispatch({ type: 'SET_HEIGHT', payload: text }) }}
          keyboardType='numeric'
          leftHint='cm'
        />
      </View>
      <BodyText text='Primeira aferição de pressão arterial' />
      <BodyText text='Braço direito' style={{ marginBottom: 0 }} />
      <View style={styles.inputsLine}>
        <TextInput
          label="PAS"
          value={state.rightArmSystolic}
          onChangeText={(text) => { dispatch({ type: 'SET_RIGHT_ARM_SYSTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
        <TextInput
          label="PAD"
          value={state.rightArmDiastolic}
          onChangeText={(text) => { dispatch({ type: 'SET_RIGHT_ARM_DIASTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
      </View>
      <BodyText text='Braço esquerdo' style={{ marginBottom: 0 }} />
      <View style={styles.inputsLine}>
        <TextInput
          label="PAS"
          value={state.leftArmSystolic}
          onChangeText={(text) => { dispatch({ type: 'SET_LEFT_ARM_SYSTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
        <TextInput
          label="PAD"
          value={state.leftArmDiastolic}
          onChangeText={(text) => { dispatch({ type: 'SET_LEFT_ARM_DIASTOLIC', payload: text }) }}
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
