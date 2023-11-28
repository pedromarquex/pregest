import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Urea (): JSX.Element {
  const contentText = [
    'Estratifica a gravidade da doença. Deve ser solicitado quando houver nítido comprometimento renal ou suspeita de síndrome hemolítico-urêmica.',
    '15- 36 mg/ dL.',
    'A dosagem de ureia não deve ser efetuada de rotina, exceto quando se suspeita de falência renal e síndrome hemolítico-urêmica.\nInterromper gestação se houver insuficiência renal evidenciada principalmente por elevação progressiva dos níveis de ureia e creatinina, oligúria e anasarca.'
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
        <Title text="Ureia" />
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
