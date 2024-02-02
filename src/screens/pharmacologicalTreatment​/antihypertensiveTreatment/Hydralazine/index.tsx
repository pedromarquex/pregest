import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Hydralazine (): JSX.Element {
  const contentText = [
    'Vasodilatador periférico',
    'Drágeas de 25 e 50 mg',
    '50 mg a 150mg/dia- 2 a 3 x/dia ',
    'Taquicardia, flushing (rubor) facial, cefaleia',
    'Para controle pressórico ou no caso de impossibilidade de uso das drogas de primeira escolha prescrever como terceira droga na associação medicamentosa;\nA pressão arterial deve ser monitorada rigorosamente quando administrada'
  ]

  const titles = [
    'Classe do Agente:',
    'Apresentação:',
    'Posologia:',
    'Principais efeitos adversos:',
    'Recomendação:'
  ]

  const reference = '(BRASIL, 2022; BRASIL, 2023; FEBRASGO, 2017; PERAÇOLI et al., 2019).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Hidralazina" />
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
