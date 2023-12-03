import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { Title } from '../../../../components/Title'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'

export function Circulation (): JSX.Element {
  const contentText = [
    'Puncionar dois acessos venosos periféricos calibrosos: cateter de número 16 ou 18, de preferência;\n\n' +
    'Deixar via exclusiva para administração do sulfato de magnésio;\n\n' +
    'Evitar hiper-hidratação sob o risco da ocorrência de edema agudo de pulmão.'
  ]

  const titles = [
    'C (Circulação)'
  ]

  const reference = '(FEBRASGO, 2018).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
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
