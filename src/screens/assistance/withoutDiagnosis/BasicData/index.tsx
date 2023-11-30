import React from 'react'
import { Background } from '../../../../components/Background'
import { TextInput } from '../../../../components/TextInput'

export function BasicInfo (): JSX.Element {
  return (
    <Background
      contentContainerStyle={{ paddingTop: 36 }}
    >
      <TextInput label="Nome" />
      <TextInput label="Data Nascimento" />
    </Background>
  )
}
