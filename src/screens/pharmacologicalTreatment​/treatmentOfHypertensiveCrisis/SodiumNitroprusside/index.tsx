import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function SodiumNitroprusside (): JSX.Element {
  const contentText = [
    'Vasodilatador Arterial e Venoso.',
    'Ampola 50 mg/2 mL.',
    'Bradiarritmias, taquiarritmias, cefaleia, tontura, sonolência, rubor facial e hipotensão.',
    'Diluir uma ampola (2mL) em 248mL de soro glicosado 5%, resultando na concentração de 200mcg/mL.',
    'Iniciar com a dose mínima e aumentar 1mL/h a cada 10 minutos;\nA dose máxima, quando necessária, não deve ser utilizada por mais do que 10 minutos, devendo-se reduzi-la, então, pela metade;\nA droga deixa de agir 3 minutos após a interrupção da infusão.'
  ]

  const titles = [
    'Classe do Agente:',
    'Apresentação:',
    'Principais efeitos adversos:',
    'Nota:',
    'Esquema de infusão recomendado:'
  ]

  const reference = 'PERAÇOLI et al., 2019; BRASIL, 2022).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Nifedipino" />
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
