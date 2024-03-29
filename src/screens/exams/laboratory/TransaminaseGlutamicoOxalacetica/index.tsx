import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function TransaminaseGlutamicoOxalacetica (): JSX.Element {
  const contentText = [
    'O valor igual ou maior que o dobro do valor de referência indica o comprometimento hepático (sugestiva da síndrome de HELLP).',
    '15-30U/L',
    'Solicitar pelo menos uma vez por semana, a cada consulta, ou a cada 72h para pré-eclâmpsia com sinais de gravidade.\nTGO/AST >2x acima do limite de normalidade com dor epigástrica ou em hipocôndrio direito é um critério para antecipação terapêutica do parto.'
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
        <Title text="Transaminase glutâmico- oxalacética (TGO/AST)" />
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
