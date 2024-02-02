import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Desidrogenase (): JSX.Element {
  const contentText = [
    'Elevação dos níveis de desidrogenase lática (DHL) igual ou maior que o dobro do valor de referência indica agravamento da doença (presença de hemólise).',
    '230-460 U/L',
    'Interromper gestação se desidrogenase lática (DHL) ≥600U/L;\nSolicitar pelo menos uma vez por semana, a cada consulta, ou a cada 72h para pré-eclâmpsia com sinais de gravidade.'
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
        <Title text="Desidrogenase Lática (DHL)" />
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
