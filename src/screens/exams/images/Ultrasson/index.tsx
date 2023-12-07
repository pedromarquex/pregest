import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Ultrasson (): JSX.Element {
  const contentText = [
    'No momento do diagnóstico;\nFeto sem alteração: Quinzenalmente;\nPaciente em conduta conservadora: Semanalmente;\nEm caso de mudanças abruptas nas condições maternas-fetais: Imediatamente.',
    'Crescimento fetal abaixo do percentil 5, feto sem vitalidade, alterações cardíacas fetais, alteração de líquido amniótico, restrição do crescimento intrauterino assimétrico indicam resolução imediata da gestação.'
  ]

  const titles = [
    'Periodicidade:',
    'Importante!'
  ]

  const reference = '(QUINTERO-ORTÍZ; GRILLO- ARDILA; AMAYA-GUIO, 2021;PEDROSO,2018)'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Ultrassonografia gestacional" />
        <Title text={titles[0]} />
        <BodyText text={contentText[0]} withDivider />
        <Title text={titles[1]} style={{ textAlign: 'center' }} />
        <BodyText text={contentText[1]} withDivider />
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
