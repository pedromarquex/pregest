import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { Title } from '../../../../components/Title'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'

export function Fetus (): JSX.Element {
  const contentText = [
    'Realizar imediatamente após o manejo materno;\n\n' +
    'Realizar ausculta fetal:\n' +
    '- Se bradicardia persistente por mais de 10 minutos, realizar cardiotocografia, Ultrassonografia obstétrica e doplerfluxometria, se disponível.'
  ]

  const titles = [
    'F (Feto)'
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
