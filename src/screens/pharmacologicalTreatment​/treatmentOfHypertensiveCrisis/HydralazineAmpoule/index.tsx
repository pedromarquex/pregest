import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function HydralazineAmpoule (): JSX.Element {
  const contentText = [
    'Vasodilatador periférico.',
    'Ampola de 20 mg/mL.',
    'Dose inicial de 5mg via endovenosa; Dose de repetição de 5mg de 20/20 minutos podendo chegar a dose máxima de 45mg.',
    'Taquicardia, flushing (rubor) facial, cefaleia.',
    'Diluir uma ampola (1 mL) em 19 mL de água destilada, assim, obtém-se a concentração de 1 mg/mL.\nA pressão arterial deve ser monitorada rigorosamente quando administrada.'
  ]

  const titles = [
    'Classe do Agente:',
    'Apresentação:',
    'Esquema de administração:',
    'Principais efeitos adversos:',
    'Nota:'
  ]

  const reference = 'PERAÇOLI et al., 2019; BRASIL, 2022).'

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
