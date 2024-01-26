import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function NifedipineFast (): JSX.Element {
  const contentText = [
    'Bloqueador dos canais de cálcio.',
    'Comprimidos de 10 e 20 mg.',
    '20 a 60 mg/dia- 2 a 3x/dia.',
    'Cefaleia, rubor facial, tontura, letargia, taquicardia, náuseas, diarreia.'
  ]

  const titles = [
    'Classe do Agente:',
    'Apresentação:',
    'Posologia:',
    'Principais efeitos adversos:'
  ]

  const reference = '(BRASIL, 2022; BRASIL, 2023; FEBRASGO, 2017; PERAÇOLI et al., 2019).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Nifedipino de liberação rápida" />
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
