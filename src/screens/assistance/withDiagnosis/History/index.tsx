import React, { useReducer } from 'react'
import { Background } from '../../../../components/Background'
import { Button } from '../../../../components/Button'
import { Switch } from '../../../../components/Switch'
import { TextInput } from '../../../../components/TextInput'
import { Title } from '../../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../../routes/assistance/assistanceStack.types'

export interface HistoryState {
  alteredFetalMovements: boolean
  alteredFetalHeartBeat: boolean

  hasLaboratorialExams: boolean
  hasLaboratorialAlterations: string
  whichLaboratorialAlterations: string

  hasUltrasound: boolean
  hasUltrasoundAlterations: string
  whichUltrasoundAlterations: string

  hasCardiotocography: boolean
  hasCardiotocographyAlterations: boolean

}

interface HistoryAction {
  type: 'SET_ALTERED_FETAL_MOVEMENTS'
  | 'SET_ALTERED_FETAL_HEART_BEAT'
  | 'SET_HAS_LABORATORIAL_EXAMS'
  | 'SET_HAS_LABORATORIAL_ALTERATIONS'
  | 'SET_WHICH_LABORATORIAL_ALTERATIONS'
  | 'SET_HAS_ULTRASOUND'
  | 'SET_HAS_ULTRASOUND_ALTERATIONS'
  | 'SET_WHICH_ULTRASOUND_ALTERATIONS'
  | 'SET_HAS_CARDIOTOCOGRAPHY'
  | 'SET_HAS_CARDIOTOCOGRAPHY_ALTERATIONS'
  payload: any
}

export function WithHistory ({ navigation, route }: AssistanceStackScreenProps<'BasicInfo'>): JSX.Element {
  const [state, dispatch] = useReducer((state: HistoryState, action: HistoryAction) => {
    switch (action.type) {
      case 'SET_ALTERED_FETAL_MOVEMENTS':
        return { ...state, alteredFetalMovements: action.payload }
      case 'SET_ALTERED_FETAL_HEART_BEAT':
        return { ...state, alteredFetalHeartBeat: action.payload }
      case 'SET_HAS_LABORATORIAL_EXAMS':
        return { ...state, hasLaboratorialExams: action.payload }
      case 'SET_HAS_LABORATORIAL_ALTERATIONS':
        return { ...state, hasLaboratorialAlterations: action.payload }
      case 'SET_WHICH_LABORATORIAL_ALTERATIONS':
        return { ...state, whichLaboratorialAlterations: action.payload }
      case 'SET_HAS_ULTRASOUND':
        return { ...state, hasUltrasound: action.payload }
      case 'SET_HAS_ULTRASOUND_ALTERATIONS':
        return { ...state, hasUltrasoundAlterations: action.payload }
      case 'SET_WHICH_ULTRASOUND_ALTERATIONS':
        return { ...state, whichUltrasoundAlterations: action.payload }
      case 'SET_HAS_CARDIOTOCOGRAPHY':
        return { ...state, hasCardiotocography: action.payload }
      case 'SET_HAS_CARDIOTOCOGRAPHY_ALTERATIONS':
        return { ...state, whichCardiotocographyAlterations: action.payload }
      default:
        return state
    }
  }, {
    alteredFetalMovements: false,
    alteredFetalHeartBeat: false,

    hasLaboratorialExams: false,
    hasLaboratorialAlterations: '',
    whichLaboratorialAlterations: '',

    hasUltrasound: false,
    hasUltrasoundAlterations: '',
    whichUltrasoundAlterations: '',

    hasCardiotocography: false,
    hasCardiotocographyAlterations: false
  })

  const navigateToMeasurement = (): void => {
    navigation.navigate('WithMeasurements', {
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
        text='Movimentação fetal alterada?'
        value={state.alteredFetalMovements}
        onToggle={() => { dispatch({ type: 'SET_ALTERED_FETAL_MOVEMENTS', payload: !(state.alteredFetalMovements as boolean) }) }}
      />
      <Switch
        text='Batimento cardíaco fetal alterado?'
        value={state.alteredFetalHeartBeat}
        onToggle={() => { dispatch({ type: 'SET_ALTERED_FETAL_HEART_BEAT', payload: !(state.alteredFetalHeartBeat as boolean) }) }}
      />
      <Switch
        text='Realizou exames laboratoriais?'
        value={state.hasLaboratorialExams}
        onToggle={() => { dispatch({ type: 'SET_HAS_LABORATORIAL_EXAMS', payload: !(state.hasLaboratorialExams as boolean) }) }}
      />
      {(Boolean(state.hasLaboratorialExams)) && (
          <Switch
            text='Apresentou alterações nos exames laboratoriais?'
            value={state.hasLaboratorialAlterations}
            onToggle={() => { dispatch({ type: 'SET_HAS_LABORATORIAL_ALTERATIONS', payload: !(state.hasLaboratorialAlterations as boolean) }) }}
        />
      )}
      {(Boolean(state.hasLaboratorialAlterations)) && (
          <TextInput
            label='Quais alterações?'
            value={state.whichLaboratorialAlterations}
            onChangeText={(text) => { dispatch({ type: 'SET_WHICH_LABORATORIAL_ALTERATIONS', payload: text }) }}
        />
      )}

      <Switch
        text='Realizou ultrassom?'
        value={state.hasUltrasound}
        onToggle={() => { dispatch({ type: 'SET_HAS_ULTRASOUND', payload: !(state.hasUltrasound as boolean) }) }}
      />
      {(Boolean(state.hasUltrasound)) && (
          <Switch
            text='Apresentou alterações no ultrassom?'
            value={state.hasUltrasoundAlterations}
            onToggle={() => { dispatch({ type: 'SET_HAS_ULTRASOUND_ALTERATIONS', payload: !(state.hasUltrasoundAlterations as boolean) }) }}
        />
      )}
      {(Boolean(state.hasUltrasoundAlterations)) && (
          <TextInput
            label='Quais alterações?'
            value={state.whichUltrasoundAlterations}
            onChangeText={(text) => { dispatch({ type: 'SET_WHICH_ULTRASOUND_ALTERATIONS', payload: text }) }}
        />
      )}

      <Switch
        text='Realizou cardiotocografia?'
        value={state.hasCardiotocography}
        onToggle={() => { dispatch({ type: 'SET_HAS_CARDIOTOCOGRAPHY', payload: !(state.hasCardiotocography as boolean) }) }}
      />
      {(Boolean(state.hasCardiotocography)) && (
          <Switch
            text='Apresentou alterações na cardiotocografia?'
            value={state.hasCardiotocographyAlterations}
            onToggle={() => { dispatch({ type: 'SET_HAS_CARDIOTOCOGRAPHY_ALTERATIONS', payload: !(state.hasCardiotocographyAlterations as boolean) }) }}
        />
      )}

    </Background>
  )
}
