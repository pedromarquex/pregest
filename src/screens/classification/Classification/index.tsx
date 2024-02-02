import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../components/Background'
import { BodyContainer } from '../../../components/BodyContainer'
import { BodyText } from '../../../components/BodyText'
import { ReferenceText } from '../../../components/ReferenceText'
import { Title } from '../../../components/Title'

export function Classification (): JSX.Element {
  const contentText = [
    'PA sistólica ≥ 140 e < 150 mmHg ou PA diastólica ≥ 90 e < 100 mmHg.',
    'PA sistólica entre ≥ 150 e < 160 mmHg ou PA diastólica ≥ 100 e < 110 mmHg.',
    'PA sistólica ≥ 160 mmHg ou PA diastólica ≥ 110 mmHg.',
    'A aferição da pressão arterial deverá ocorrer preferencialmente com a paciente sentada ou em decúbito lateral esquerdo, posicionando o aparelho no membro superior direito e mantendo-o elevado na altura do coração. A pressão diastólica deve ser considerada pelo 5º ruído de Korotkoff, referente ao desaparecimento da bulha (Brasil, 2022).'
  ]

  const titles = [
    'Hipertensão arterial leve',
    'Hipertensão arterial moderada',
    'Hipertensão arterial grave',
    'Nota:'
  ]

  const reference = '(FEBRASGO, 2018; BRASIL, 2022).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
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
