import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function BioProfile (): JSX.Element {
  const contentText = [
    '30 a 34 semanas: Quinzenalmente\nApós 34 semanas até o parto ou em pacientes em conduta conservadora: Semanalmente\nEm caso de mudanças abruptas nas condições maternas-fetais ou em caso de doppler alterada em gestações pré-termo: Imediatamente.',
    'Resultado de 6/10 sem oligoâmnio sugere teste suspeito- indica repetição em 24 horas ou interrupção de gestação, se maturidade pulmonar;\nResultado 0/10 a 4/10 sugere alto risco para asfixia fetal- indica resolução imediata da gestação;\nResultado 6/10 ou 8/10 com oligoâmnio- Sugere teste anormal, com alto risco de asfixia fetal- indica resolução imediata da gestação.'
  ]

  const titles = [
    'Periodicidade:',
    'Importante!'
  ]

  const reference = '(QUINTERO-ORTÍZ; GRILLO- ARDILA; AMAYA-GUIO, 2021;PEDROSO,2018)'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Perfil biofísico fetal" />
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
