import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Pindolol (): JSX.Element {
  const contentText = [
    'β-bloqueador.',
    'Comprimidos de 25, 50 e 100 mg.',
    '100 a 200 mg/dia 1 a 2 x/dia.',
    'Bradicardia, alterações posturais (muito raramente com síncope), mãos e pés frios, fenômeno de Raynaud e palpitações.',
    'Para controle pressórico ou no caso de impossibilidade de uso das drogas de primeira escolha prescrever como terceira droga na associação medicamentosa.'
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
        <Title text="Pindolol" />
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
