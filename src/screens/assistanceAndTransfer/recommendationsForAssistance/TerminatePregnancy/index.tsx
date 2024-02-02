import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function TerminatePregnancy (): JSX.Element {
  const contentText = [
    'Não deve ser intempestiva nem imediata;',
    'O ideal é aguardar pelo menos uma hora após a última crise convulsiva para que a acidose do feto seja compensada pela mãe;',
    'Deve-se aguardar pelo menos a contagem plaquetária. Importante lembrar que existe indicação de interrupção da gestação, mas que a via de parto é obstétrica;',
    'Realizar corticoterapia para maturação pulmonar fetal, se necessário, pelo menos a primeira dose;',
    'Em alguns serviços se recomenda reservar sangue para as pacientes.'
  ]

  const reference = '(FEBRASGO, 2018).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
      <Title text='G (Interromper gestação)' />
        {contentText.map((text, index) => (
          <View key={index}>
            <BodyText text={text} withDivider />
          </View>
        ))}
        <ReferenceText text={reference} />
      </BodyContainer>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
