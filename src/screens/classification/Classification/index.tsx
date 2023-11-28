import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../components/Background'
import { BodyContainer } from '../../../components/BodyContainer'
import { BodyText } from '../../../components/BodyText'
import { ReferenceText } from '../../../components/ReferenceText'
import { Title } from '../../../components/Title'

export function Classification (): JSX.Element {
  const contentText = [
    'PA sistólica ≥ 140 e < 150 mmHg ou PA diastólica ≥ 90 e < 100 mmHg.',
    'PA sistólica entre ≥ 150 e < 160 mmHg ou PA diastólica ≥ 100 e < 110 mmHg.',
    'PA sistólica ≥ 160 mmHg ou PA diastólica ≥ 110 mmHg.'
  ]

  const titles = [
    'Hipertensão arterial leve',
    'Hipertensão arterial moderada',
    'Hipertensão arterial grave'
  ]

  const reference = '(FEBRASGO, 2018; BRASIL, 2022).'

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
