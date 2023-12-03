import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Betamethasone (): JSX.Element {
  const contentText = [
    'Acetato + Betametasona + Fostato Dissódico, Suspensão injetável (3 mg/mL + 3 mg/mL). Ampola de 1 ml.',
    'Intramuscular.',
    '12 mg a cada 24 horas por 48 horas (total de duas doses).',
    'Droga de primeira escolha;\n\n' +
    'Fazer entre 24 e 34 semanas, em casos de interrupção pré-termo da gestação.'
  ]

  const titles = [
    'Apresentação:',
    'Via de Administração:',
    'Esquema de Administração:',
    'Nota:'
  ]

  const reference = '(PERAÇILI; 2019; FEBRASGO, 2019; BRASIL, 2022).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Betametasona" />
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
