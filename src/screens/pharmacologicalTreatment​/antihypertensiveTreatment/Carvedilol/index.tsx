import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Carvedilol (): JSX.Element {
  const contentText = [
    'β-bloqueadores.',
    'Comprimidos de 6,25 e 12,5 mg.',
    '12,5 a 50 mg/dia 1 a 2 x/dia.',
    'Tontura, cefaleia, cansaço, náuseas e bradicardia.',
    'Dose inicial: 12,5 mg/dia por dois dias, após esse período, aumentar a dose;\nPara controle pressórico ou no caso de impossibilidade de uso das drogas de primeira escolha prescrever como terceira droga na associação medicamentosa.'
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
        <Title text="Carvedilol" />
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
