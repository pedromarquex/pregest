import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Pindolol (): JSX.Element {
  const contentText = [
    'β-bloqueador.',
    'Comprimidos de 5 mg e 10 mg',
    '10 mg a 30 mg/dia 2 a 3 vezes/dia',
    'fadiga, tontura, náuseas, câimbras musculares, tremores, cefaleia, distúrbios do sono, reações cutâneas, depressão e alucinações',
    'Os β-bloqueadores de maior experiência clínica; para controle pressórico ou no caso de impossibilidade de uso das drogas de primeira escolha prescrever como terceira droga na associação medicamentosa.\nDroga de difícil acesso.'
  ]

  const titles = [
    'Classe do Agente:',
    'Apresentação:',
    'Posologia:',
    'Principais efeitos adversos:',
    'Recomendação:'
  ]

  const reference = '(BRASIL, 2022; BRASIL, 2023; FEBRASGO, 2017; PERAÇOLI et al., 2019).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Pindolol" />
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
