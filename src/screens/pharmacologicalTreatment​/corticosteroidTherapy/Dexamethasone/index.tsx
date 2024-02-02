import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Dexamethasone (): JSX.Element {
  const contentText = [
    'Intramuscular.',
    '6 mg a cada 12 horas por 48 horas (total de quatro doses).',
    'Fazer entre 24 e 34 semanas, em casos de interrupção pré-termo da gestação.\nDeve ser utilizada quando não houver disponibilidade da betametasona.'
  ]

  const titles = [
    'Via de Administração:',
    'Esquema de Administração:',
    'Nota:'
  ]

  const reference = '(PERAÇILI; 2019; FEBRASGO, 2019; BRASIL, 2022).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Dexametasona" />
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
