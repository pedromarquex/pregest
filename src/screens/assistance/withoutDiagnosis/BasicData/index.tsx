import React, { useReducer } from 'react'
import { Background } from '../../../../components/Background'
import { TextInput } from '../../../../components/TextInput'
import { DateInput } from '../../../../components/TextInput/date'

interface BasicInfoState {
  name: string
  birthDate: string
}

interface BasicInfoAction {
  type: 'SET_NAME' | 'SET_BIRTH_DATE'
  payload: string
}

export function BasicInfo (): JSX.Element {
  const [state, dispatch] = useReducer((state: BasicInfoState, action: BasicInfoAction) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload }
      case 'SET_BIRTH_DATE':
        return { ...state, birthDate: action.payload }
      default:
        return state
    }
  }, {
    name: '',
    birthDate: ''
  })

  const [open, setOpen] = React.useState(false)

  return (
    <Background
      contentContainerStyle={{ paddingTop: 36 }}
    >
      <TextInput
        label="Nome"
        value={state.name}
        onChangeText={(text) => { dispatch({ type: 'SET_NAME', payload: text }) }}
      />
      <DateInput
        label="Data de nascimento"
        value={state.birthDate}
        onChangeText={(text) => { dispatch({ type: 'SET_BIRTH_DATE', payload: text }) }}
        open={open}
        setOpen={setOpen}
      />
      <TextInput
        label="Nome"
        value={state.name}
        onChangeText={(text) => { dispatch({ type: 'SET_NAME', payload: text }) }}
      />
    </Background>
  )
}
