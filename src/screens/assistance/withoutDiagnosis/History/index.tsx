import React, { useReducer } from 'react'
import { Background } from '../../../../components/Background'
import { Button } from '../../../../components/Button'
import { Switch } from '../../../../components/Switch'
import { Title } from '../../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../../routes/assistance/assistanceStack.types'

interface HistoryState {
  hasHypertension: boolean
  hasDiabetes: boolean
  hasAutoimmuneDisease: boolean
  hasFamilyPreEclampsia: boolean
  hasAnteriorPreEclampsia: boolean
}

interface HistoryAction {
  type: 'SET_HYPERTENSION'
  | 'SET_DIABETES'
  | 'SET_AUTOIMMUNE_DISEASE'
  | 'SET_FAMILY_PRE_ECLAMPSIA'
  | 'SET_ANTERIOR_PRE_ECLAMPSIA'
  payload: any
}

export function History ({ navigation, route }: AssistanceStackScreenProps<'BasicInfo'>): JSX.Element {
  const [state, dispatch] = useReducer((state: HistoryState, action: HistoryAction) => {
    switch (action.type) {
      case 'SET_ANTERIOR_PRE_ECLAMPSIA':
        return { ...state, hasAnteriorPreEclampsia: action.payload }
      case 'SET_AUTOIMMUNE_DISEASE':
        return { ...state, hasAutoimmuneDisease: action.payload }
      case 'SET_DIABETES':
        return { ...state, hasDiabetes: action.payload }
      case 'SET_FAMILY_PRE_ECLAMPSIA':
        return { ...state, hasFamilyPreEclampsia: action.payload }
      case 'SET_HYPERTENSION':
        return { ...state, hasHypertension: action.payload }
      default:
        return state
    }
  }, {
    hasHypertension: false,
    hasDiabetes: false,
    hasAutoimmuneDisease: false,
    hasFamilyPreEclampsia: false,
    hasAnteriorPreEclampsia: false
  })

  const navigateToMeasurement = (): void => {
    navigation.navigate('FirstMeasurement', {
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
          onPress={navigateToMeasurement}
          style={{ marginHorizontal: 20 }}
        />
      }
    >
      <Title text='Histórico' style={{ paddingTop: 0 }} />
      <Switch
        value={state.hasHypertension}
        onToggle={() => { dispatch({ type: 'SET_HYPERTENSION', payload: !(state.hasHypertension as boolean) }) }}
        text="Portadora de hipertensão crônica?"
      />
      <Switch
        value={state.hasDiabetes}
        onToggle={() => { dispatch({ type: 'SET_DIABETES', payload: !(state.hasDiabetes as boolean) }) }}
        text="Portadora de diabetes tipo 1 ou 2?"
      />
      <Switch
        value={state.hasAutoimmuneDisease}
        onToggle={() => { dispatch({ type: 'SET_AUTOIMMUNE_DISEASE', payload: !(state.hasAutoimmuneDisease as boolean) }) }}
        text="Portadora de doença autoimune?"
      />
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
