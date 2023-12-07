import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../components/Background'
import { BodyContainer } from '../../../components/BodyContainer'
import { ReferenceText } from '../../../components/ReferenceText'
import { BodyText } from '../../../components/BodyText'
import { Title } from '../../../components/Title'

export function Rest (): JSX.Element {
  const contentText = [
    'A redução da atividade física para mulheres com pré-eclâmpsia pode contribuir para melhora no fluxo sanguíneo uteroplacentário e prevenir a exacerbação da hipertensão, particularmente se a pressão arterial não estiver bem controlada. Porém, não há evidências de que melhore significativamente os principais desfechos maternos e perinatais.'
  ]

  const titles = [
    'Redução de Atividade Física'
  ]

  const reference = '(BRASIL, 2022; FEBRASGO, 2019; PERAÇILI; 2019).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Repouso Hospitalar ou Domiciliar" />
        {contentText.map((text, index) => (
          <View key={index}>
            <Title text={titles[index]} />
            <BodyText text={text} withDivider />
          </View>
        ))}
        <Title text="Não recomendar o repouso absoluto." style={{ textAlign: 'center' }}/>
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
