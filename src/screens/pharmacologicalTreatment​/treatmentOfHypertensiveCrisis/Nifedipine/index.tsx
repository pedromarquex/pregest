import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Nifedipine (): JSX.Element {
  const contentText = [
    'Bloqueador de canais de cálcio.',
    'Comprimido de 10mg.',
    'Dose inicial de 10mg via oral;\n' +
    'Dose de repetição de 10mg de 20-30 minutos podendo chegar a dose máxima de 30mg.',
    'Cefaleia, flushing (rubor) facial, tontura, letargia, taquicardia, náuseas, diarreia.',
    'Se necessário, repetir dose a cada 20 a 30 minutos (dose máxima de 30 mg).\n' +
    'Evitar a via sublingual.'
  ]

  const titles = [
    'Classe do Agente:',
    'Apresentação:',
    'Esquema de administração:',
    'Principais efeitos adversos:',
    'Nota:'
  ]

  const reference = 'PERAÇOLI et al., 2019; BRASIL, 2022).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Nifedipino" />
        {contentText.map((text, index) => (
          <View key={index}>
            <Title text={titles[index]} />
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
