import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { Title } from '../../../../components/Title'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'

export function TerminatePregnancy (): JSX.Element {
  const contentText = [
    'Definir o momento e as circunstâncias apropriadas para interromper gestação;',
    'Recomenda-se aguardar pelo menos uma hora após a última crise convulsiva para que a acidose do feto seja compensada pela mãe;',
    'É necessário aguardar pelo menos a contagem plaquetária;',
    'A via de parto mais recomendada é a vaginal;',
    'Realizar corticoterapia para maturação pulmonar fetal, se necessário, pelo menos a primeira dose;',
    'Avaliar a necessidade de reserva de hemocomponentes.'
  ]

  const reference = '(FEBRASGO, 2018).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
      <Title text='G (Interromper gestação)' />
        {contentText.map((text, index) => (
          <View key={index}>
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
