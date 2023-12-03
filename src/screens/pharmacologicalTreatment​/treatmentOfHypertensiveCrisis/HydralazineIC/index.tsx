import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function HydralazineIC (): JSX.Element {
  const contentText = [
    'Vasodilatador periférico.',
    'Ampola de 20 mg/mL.',
    'Taquicardia, flushing (rubor) facial, cefaleia.',
    'A pressão arterial deve ser monitorada rigorosamente quando administrada.'
  ]

  const titles = [
    'Classe do Agente:',
    'Apresentação:',
    'Principais efeitos adversos:',
    'Nota:'
  ]

  const reference = 'PERAÇOLI et al., 2019; BRASIL, 2022).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Hidralazina em IC" />
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
