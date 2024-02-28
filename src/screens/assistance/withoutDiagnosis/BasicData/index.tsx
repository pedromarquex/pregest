import React, { useReducer } from 'react'
import { Background } from '../../../../components/Background'
import { Button } from '../../../../components/Button'
import { Dropdown } from '../../../../components/Dropdown'
import { TextInput } from '../../../../components/TextInput'
import { DateInput } from '../../../../components/TextInput/date'
import { Title } from '../../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../../routes/assistance/assistanceStack.types'

export interface BasicInfoState {
  name: string
  birthDate: string
  race: string
  gestationalAge: string
  lastPregnancy: string
}

interface BasicInfoAction {
  type: 'SET_NAME'
  | 'SET_BIRTH_DATE'
  | 'SET_RACE'
  | 'SET_GESTATIONAL_AGE'
  | 'SET_LAST_PREGNANCY'
  payload: any
}

export function BasicInfo ({ navigation }: AssistanceStackScreenProps<'BasicInfo'>): JSX.Element {
  const [state, dispatch] = useReducer((state: BasicInfoState, action: BasicInfoAction) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload }
      case 'SET_BIRTH_DATE':
        return { ...state, birthDate: action.payload }
      case 'SET_RACE':
        return { ...state, race: action.payload }
      case 'SET_GESTATIONAL_AGE':
        return { ...state, gestationalAge: action.payload }
      case 'SET_LAST_PREGNANCY':
        return { ...state, lastPregnancy: action.payload }
      default:
        return state
    }
  }, {
    name: '',
    birthDate: '',
    race: '',
    gestationalAge: '',
    lastPregnancy: ''
  })

  const racesOptions = [{
    label: 'Branco',
    value: 'Branco'
  },
  {
    label: 'Preto',
    value: 'Preto'
  },
  {
    label: 'Pardo',
    value: 'Pardo'
  },
  {
    label: 'Amarelo',
    value: 'Amarelo'
  },
  {
    label: 'Indígena',
    value: 'Indígena'
  }]

  // years from current year to 1900
  const lastPregnancyOptions = Array.from({ length: new Date().getFullYear() - 1900 }, (_, i) => i + 1900).map((year) => ({
    label: year.toString(),
    value: year.toString()
  })).reverse()

  const navigateToHistory = (): void => {
    navigation.navigate('History', {
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
      <Dropdown
        items={racesOptions}
        label="Raça"
        value={racesOptions.find((race) => race.value === state.race) ?? { label: '', value: '' }}
        onChangeText={(item) => { dispatch({ type: 'SET_RACE', payload: item.value }) }}
        hideFilter
      />
      <TextInput
        label="Idade gestacional"
        value={state.gestationalAge}
        onChangeText={(text) => { dispatch({ type: 'SET_GESTATIONAL_AGE', payload: text }) }}
        leftHint='Em semanas'
        keyboardType='numeric'
      />
      <Dropdown
        items={lastPregnancyOptions}
        label="Última gestação"
        value={lastPregnancyOptions.find((year) => year.value === state.lastPregnancy) ?? { label: '', value: '' }}
        onChangeText={(item) => { dispatch({ type: 'SET_LAST_PREGNANCY', payload: item.value }) }}
        leftHint='Ano'
      />
    </Background>
  )
}
