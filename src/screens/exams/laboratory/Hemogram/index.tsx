import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Hemogram (): JSX.Element {
  const contentText = [
    'Hemoglobina e Hematócrito: a hemoconcentração reforça o diagnóstico de pré-eclâmpsia e é um indicador de gravidade. \n\nContagem de Plaquetas: A trombocitopenia sugere pré-eclâmpsia.',
    'Hematócrito: 36-46%\nHemoglobina: 12-16g/dL\nPlaquetas: 150.000- 400.000/mm3',
    'Interromper gestação se Plaquetas < 100.000/dL\nSolicitar pelo menos uma vez por semana, a cada consulta, ou a cada 72h para pré-eclâmpsia com sinais de gravidade.'
  ]

  const titles = [
    'Justificativa:',
    'Valores de Referência:',
    'Recomendações:'
  ]

  const reference = '(BRASIL, 2022; PERAÇOLI, 2020;FEBRASGO, 2019).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Hemograma" />
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
