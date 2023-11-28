import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Cardiotocography (): JSX.Element {
  const contentText = [
    '30 a 34 semanas: Quinzenalmente\nApós 34 semanas até o parto ou em caso de cardiotocografia reativa: Semanalmente;\nEm caso de mudanças abruptas nas condições maternas-fetais ou em caso de doppler alterada em gestações pré-termo: Imediatamente;\nSempre que houver a necessidade ou a possibilidade de prolongar a gestação.',
    'Realizar a cardiotocografia com monitorizarão continua ou intermitente da frequência cardíaca fetal durante o trabalho de parto para vigilância do feto;\nAnormalidades na cardiotocografia indica o término da gestação.'
  ]

  const titles = [
    'Periodicidade:',
    'Importante!'
  ]

  const reference = '(QUINTERO-ORTÍZ; GRILLO- ARDILA; AMAYA-GUIO, 2021;PEDROSO,2018)'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Cardiotocografia" />
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
