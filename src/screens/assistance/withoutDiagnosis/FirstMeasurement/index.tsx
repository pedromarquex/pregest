import React, { useReducer } from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { Button } from '../../../../components/Button'
import { Switch } from '../../../../components/Switch'
import { TextInput } from '../../../../components/TextInput'
import { Title } from '../../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../../routes/assistance/assistanceStack.types'

export interface MeasurementsInfoState {
  weight: string
  height: string
  hasFamilyPreEclampsia: boolean
  hasAnteriorPreEclampsia: boolean
}

interface MeasurementsAction {
  type: 'SET_WEIGHT'
  | 'SET_HEIGHT'
  | 'SET_FAMILY_PRE_ECLAMPSIA'
  | 'SET_ANTERIOR_PRE_ECLAMPSIA'
  payload: any
}

export function FirstMeasurement ({ navigation, route }: AssistanceStackScreenProps<'BasicInfo'>): JSX.Element {
  const [state, dispatch] = useReducer((state: MeasurementsInfoState, action: MeasurementsAction) => {
    switch (action.type) {
      case 'SET_HEIGHT':
        return { ...state, height: action.payload }
      case 'SET_WEIGHT':
        return { ...state, weight: action.payload }
      case 'SET_ANTERIOR_PRE_ECLAMPSIA':
        return { ...state, hasAnteriorPreEclampsia: action.payload }
      case 'SET_FAMILY_PRE_ECLAMPSIA':
        return { ...state, hasFamilyPreEclampsia: action.payload }
      default:
        return state
    }
  }, {
    weight: '',
    height: '',
    hasFamilyPreEclampsia: false,
    hasAnteriorPreEclampsia: false
  })

  const navigateToSecond = (): void => {
    navigation.navigate('Result', {
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
          onPress={navigateToSecond}
          style={{ marginHorizontal: 20 }}
        />
      }
    >
      <Title text='Histórico' style={{ paddingTop: 0 }} />

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
      <Switch
        value={state.hasFamilyPreEclampsia}
        onToggle={() => { dispatch({ type: 'SET_FAMILY_PRE_ECLAMPSIA', payload: !(state.hasFamilyPreEclampsia as boolean) }) }}
        text="Histórico familiar de pré-eclâmpsia?"
      />
      <Switch
        value={state.hasAnteriorPreEclampsia}
        onToggle={() => { dispatch({ type: 'SET_ANTERIOR_PRE_ECLAMPSIA', payload: !(state.hasAnteriorPreEclampsia as boolean) }) }}
        text="Pré-eclâmpsia em gestação anterior?"
      />
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
