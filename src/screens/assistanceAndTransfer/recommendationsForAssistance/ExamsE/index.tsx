import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { Title } from '../../../../components/Title'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'

export function ExamsE (): JSX.Element {
  const contentText = [
    'Realizar Exame físico geral e Exame obstétrico.\n\n' +
    'Deve-se avaliar:\n' +
    '1 - altura de fundo uterino (estimativa da idade gestacional);\n' +
    '2 - dinâmica uterina (verificar a ocorrência de contrações)\n' +
    '3 - tônus uterino (para afastar a presença de descolamento placentário associado).\n\n' +
    'Avaliação da Emergência hipertensiva: na presença de hipertensão arterial grave fazer uso de anti-hipertensivos de ação rápida.'
  ]

  const titles = [
    'E (Exames)'
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
