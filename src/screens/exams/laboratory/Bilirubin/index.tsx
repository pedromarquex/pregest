import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Bilirubin (): JSX.Element {
  const contentText = [
    'Níveis de bilirrubina indireta ≥ a 1,20 mg/dL indica agravamento da doença (anemia microangiopática e a presença de hemólise).',
    'Bilirrubina direta: Até 0,20mg/dL;\nBilirrubina indireta: Até 0,80mg/dL;\nBilirrubina total: Até 1,20mg/dL.',
    'Interromper gestação se bilirrubinas indiretas acima de 1,20 mg/dL;\nSolicitar pelo menos uma vez por semana, a cada consulta, ou a cada 72h para pré-eclâmpsia com sinais de gravidade.'
  ]

  const titles = [
    'Justificativa:',
    'Valores de Referência:',
    'Recomendações:'
  ]

  const reference = '(BRASIL, 2022; PERAÇOLI, 2020;FEBRASGO, 2019).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Bilirrubinas totais e frações" />
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
