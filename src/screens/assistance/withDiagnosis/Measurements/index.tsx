import React, { useReducer } from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyText } from '../../../../components/BodyText'
import { Button } from '../../../../components/Button'
import { TextInput } from '../../../../components/TextInput'
import { Title } from '../../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../../routes/assistance/assistanceStack.types'

interface MeasurementsInfoState {
  firstRightArmDiastolic: string
  firstRightArmSystolic: string
  firstLeftArmDiastolic: string
  firstLeftArmSystolic: string

  secondRightArmDiastolic: string
  secondRightArmSystolic: string
  secondLeftArmDiastolic: string
  secondLeftArmSystolic: string
}

interface MeasurementsAction {
  type: 'SET_FIRST_RIGHT_ARM_DIASTOLIC'
  | 'SET_FIRST_RIGHT_ARM_SYSTOLIC'
  | 'SET_FIRST_LEFT_ARM_DIASTOLIC'
  | 'SET_FIRST_LEFT_ARM_SYSTOLIC'

  | 'SET_SECOND_RIGHT_ARM_DIASTOLIC'
  | 'SET_SECOND_RIGHT_ARM_SYSTOLIC'
  | 'SET_SECOND_LEFT_ARM_DIASTOLIC'
  | 'SET_SECOND_LEFT_ARM_SYSTOLIC'
  payload: any
}

export function WithMeasurements ({ navigation, route }: AssistanceStackScreenProps<'BasicInfo'>): JSX.Element {
  const [state, dispatch] = useReducer((state: MeasurementsInfoState, action: MeasurementsAction) => {
    switch (action.type) {
      case 'SET_FIRST_RIGHT_ARM_DIASTOLIC':
        return { ...state, firstRightArmDiastolic: action.payload }
      case 'SET_FIRST_RIGHT_ARM_SYSTOLIC':
        return { ...state, firstRightArmSystolic: action.payload }
      case 'SET_FIRST_LEFT_ARM_DIASTOLIC':
        return { ...state, firstLeftArmDiastolic: action.payload }
      case 'SET_FIRST_LEFT_ARM_SYSTOLIC':
        return { ...state, firstLeftArmSystolic: action.payload }
      case 'SET_SECOND_RIGHT_ARM_DIASTOLIC':
        return { ...state, secondRightArmDiastolic: action.payload }
      case 'SET_SECOND_RIGHT_ARM_SYSTOLIC':
        return { ...state, secondRightArmSystolic: action.payload }
      case 'SET_SECOND_LEFT_ARM_DIASTOLIC':
        return { ...state, secondLeftArmDiastolic: action.payload }
      case 'SET_SECOND_LEFT_ARM_SYSTOLIC':
        return { ...state, secondLeftArmSystolic: action.payload }
      default:
        return state
    }
  }, {
    firstRightArmDiastolic: '',
    firstRightArmSystolic: '',
    firstLeftArmDiastolic: '',
    firstLeftArmSystolic: '',
    secondRightArmDiastolic: '',
    secondRightArmSystolic: '',
    secondLeftArmDiastolic: '',
    secondLeftArmSystolic: ''
  })

  const navigateToHistory = (): void => {
    navigation.navigate('WithResult', {
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
          text='Ver resultados'
          onPress={navigateToHistory}
          style={{ marginHorizontal: 20 }}
        />
      }
    >
      <Title text='Primeiras Aferições' style={{ paddingTop: 0 }} />
      <BodyText text='Braço direito' style={{ marginBottom: 0 }} />
      <View style={styles.inputsLine}>
        <TextInput
          label="PAD"
          value={state.firstRightArmDiastolic}
          onChangeText={(text) => { dispatch({ type: 'SET_FIRST_RIGHT_ARM_DIASTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
        <TextInput
          label="PAS"
          value={state.firstRightArmSystolic}
          onChangeText={(text) => { dispatch({ type: 'SET_FIRST_RIGHT_ARM_SYSTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
      </View>
      <BodyText text='Braço esquerdo' style={{ marginBottom: 0 }} />
      <View style={styles.inputsLine}>
        <TextInput
          label="PAD"
          value={state.firstLeftArmDiastolic}
          onChangeText={(text) => { dispatch({ type: 'SET_FIRST_LEFT_ARM_DIASTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
        <TextInput
          label="PAS"
          value={state.firstLeftArmSystolic}
          onChangeText={(text) => { dispatch({ type: 'SET_FIRST_LEFT_ARM_SYSTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
      </View>
      <Title text='Segundas Aferições' style={{ paddingTop: 0 }} />
      <BodyText text='Observação: Aguardar 15 minutos após as primeiras aferições' />
      <BodyText text='Braço direito' style={{ marginBottom: 0 }} />
      <View style={styles.inputsLine}>
        <TextInput
          label="PAD"
          value={state.secondRightArmDiastolic}
          onChangeText={(text) => { dispatch({ type: 'SET_SECOND_RIGHT_ARM_DIASTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
        <TextInput
          label="PAS"
          value={state.secondRightArmSystolic}
          onChangeText={(text) => { dispatch({ type: 'SET_SECOND_RIGHT_ARM_SYSTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
      </View>
      <BodyText text='Braço esquerdo' style={{ marginBottom: 0 }} />
      <View style={styles.inputsLine}>
        <TextInput
          label="PAD"
          value={state.secondLeftArmDiastolic}
          onChangeText={(text) => { dispatch({ type: 'SET_SECOND_LEFT_ARM_DIASTOLIC', payload: text }) }}
          keyboardType='numeric'
        />
        <TextInput
          label="PAS"
          value={state.secondLeftArmSystolic}
          onChangeText={(text) => { dispatch({ type: 'SET_SECOND_LEFT_ARM_SYSTOLIC', payload: text }) }}
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
