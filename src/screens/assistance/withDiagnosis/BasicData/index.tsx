import React, { useReducer } from 'react'
import { Background } from '../../../../components/Background'
import { Button } from '../../../../components/Button'
import { Switch } from '../../../../components/Switch'
import { TextInput } from '../../../../components/TextInput'
import { DateInput } from '../../../../components/TextInput/date'
import { Title } from '../../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../../routes/assistance/assistanceStack.types'

export interface BasicInfoState {
  name: string
  birthDate: string
  gestationalAge: string // weeks
  hasNausea: boolean
  hasGainedWeight: boolean
  hasHeadache: boolean
  hasAbdominalPain: boolean
  hasToracicPain: boolean
  hasFaceAndHandEdema: boolean
  hasVisualDisturbance: boolean
  hasUrineAlteration: boolean
}

interface BasicInfoAction {
  type: 'SET_NAME'
  | 'SET_BIRTH_DATE'
  | 'SET_GESTATIONAL_AGE'
  | 'SET_HAS_NAUSEA'
  | 'SET_HAS_GAINED_WEIGHT'
  | 'SET_HAS_HEADACHE'
  | 'SET_HAS_ABDOMINAL_PAIN'
  | 'SET_HAS_TORACIC_PAIN'
  | 'SET_HAS_FACE_AND_HAND_EDEMA'
  | 'SET_HAS_VISUAL_DISTURBANCE'
  | 'SET_HAS_URINE_ALTERATION'
  payload: any
}

export function WithBasicInfo ({ navigation }: AssistanceStackScreenProps<'BasicInfo'>): JSX.Element {
  const [state, dispatch] = useReducer((state: BasicInfoState, action: BasicInfoAction) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload }
      case 'SET_BIRTH_DATE':
        return { ...state, birthDate: action.payload }
      case 'SET_GESTATIONAL_AGE':
        return { ...state, gestationalAge: action.payload }
      case 'SET_HAS_NAUSEA':
        return { ...state, hasNausea: action.payload }
      case 'SET_HAS_GAINED_WEIGHT':
        return { ...state, hasGainedWeight: action.payload }
      case 'SET_HAS_HEADACHE':
        return { ...state, hasHeadache: action.payload }
      case 'SET_HAS_ABDOMINAL_PAIN':
        return { ...state, hasAbdominalPain: action.payload }
      case 'SET_HAS_TORACIC_PAIN':
        return { ...state, hasToracicPain: action.payload }
      case 'SET_HAS_FACE_AND_HAND_EDEMA':
        return { ...state, hasFaceAndHandEdema: action.payload }
      case 'SET_HAS_VISUAL_DISTURBANCE':
        return { ...state, hasVisualDisturbance: action.payload }
      case 'SET_HAS_URINE_ALTERATION':
        return { ...state, hasUrineAlteration: action.payload }
      default:
        return state
    }
  }, {
    name: '',
    birthDate: '',
    gestationalAge: '',
    hasNausea: false,
    hasGainedWeight: false,
    hasHeadache: false,
    hasAbdominalPain: false,
    hasToracicPain: false,
    hasFaceAndHandEdema: false,
    hasVisualDisturbance: false,
    hasUrineAlteration: false
  })

  const navigateToHistory = (): void => {
    navigation.navigate('WithHistory', {
      data: state
    })
  }

  return (
    <Background
      contentContainerStyle={{ paddingTop: 36, paddingBottom: 150 }}
      bottom={
        <Button
          text='Continuar →'
          onPress={navigateToHistory}
          style={{ marginHorizontal: 20 }}
        />
      }
    >
      <Title text='Dados básicos' style={{ paddingTop: 0 }} />
      <TextInput
        label="Nome"
        value={state.name}
        onChangeText={(text) => { dispatch({ type: 'SET_NAME', payload: text }) }}
      />
      <DateInput
        label="Data de nascimento"
        value={state.birthDate}
        onChangeText={(text) => { dispatch({ type: 'SET_BIRTH_DATE', payload: text }) }}
      />
      <TextInput
        label="Idade gestacional"
        value={state.gestationalAge}
        onChangeText={(text) => { dispatch({ type: 'SET_GESTATIONAL_AGE', payload: text }) }}
        keyboardType="numeric"
        maxLength={2}
        leftHint='semanas'
      />
      <Switch
        text='Paciente apresenta náuseas e vômitos?'
        value={state.hasNausea}
        onToggle={() => { dispatch({ type: 'SET_HAS_NAUSEA', payload: !(state.hasNausea as boolean) }) }}
      />
      <Switch
        text='Paciente apresenta ganho de peso?'
        value={state.hasGainedWeight}
        onToggle={() => { dispatch({ type: 'SET_HAS_GAINED_WEIGHT', payload: !(state.hasGainedWeight as boolean) }) }}
      />
      <Switch
        text='Paciente com queixa de cefaleia?'
        value={state.hasHeadache}
        onToggle={() => { dispatch({ type: 'SET_HAS_HEADACHE', payload: !(state.hasHeadache as boolean) }) }}
      />
      <Switch
        text='Paciente com queixa de dor abdominal?'
        value={state.hasAbdominalPain}
        onToggle={() => { dispatch({ type: 'SET_HAS_ABDOMINAL_PAIN', payload: !(state.hasAbdominalPain as boolean) }) }}
      />
      <Switch
        text='Paciente com queixa de dor torácica?'
        value={state.hasToracicPain}
        onToggle={() => { dispatch({ type: 'SET_HAS_TORACIC_PAIN', payload: !(state.hasToracicPain as boolean) }) }}
      />
      <Switch
        text='Paciente apresenta edema em face e mãos?'
        value={state.hasFaceAndHandEdema}
        onToggle={() => { dispatch({ type: 'SET_HAS_FACE_AND_HAND_EDEMA', payload: !(state.hasFaceAndHandEdema as boolean) }) }}
      />
      <Switch
        text='Paciente apresenta distúrbio visual?'
        value={state.hasVisualDisturbance}
        onToggle={() => { dispatch({ type: 'SET_HAS_VISUAL_DISTURBANCE', payload: !(state.hasVisualDisturbance as boolean) }) }}
      />
      <Switch
        text='Paciente apresenta alteração em exame de urina tipo 1?'
        value={state.hasUrineAlteration}
        onToggle={() => { dispatch({ type: 'SET_HAS_URINE_ALTERATION', payload: !(state.hasUrineAlteration as boolean) }) }}
      />
    </Background>
  )
}
