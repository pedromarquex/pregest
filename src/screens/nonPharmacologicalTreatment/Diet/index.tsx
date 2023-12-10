import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../components/Background'
import { BodyContainer } from '../../../components/BodyContainer'
import { ReferenceText } from '../../../components/ReferenceText'
import { BodyText } from '../../../components/BodyText'
import { Title } from '../../../components/Title'

export function Diet (): JSX.Element {
  const contentText = [
    'Recomenda-se dieta normal, sem restrição de sal, uma vez que não há evidências para se preconizar essa conduta no auxílio do controle pressórico ou na prevenção de desfechos adversos. Admite-se ainda que a restrição na ingesta de sódio possa reduzir o volume intravascular. Portanto a restrição de sal é justificada apenas para as situações clínicas nas quais existam vantagens para a redução do volume intravascular.'
  ]

  const titles = [
    'Dieta normossódica'
  ]

  const reference = '(BRASIL, 2022; FEBRASGO, 2019; PERAÇILI; 2019).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Dieta" />
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
