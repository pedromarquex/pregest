import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function AirwayAndHelp (): JSX.Element {
  const contentText = [
    'Reconhecer a situação e possibilitar transferência da gestante em transporte adequado, mediante confirmação prévia de vaga em outra unidade;\n\n' +
    'Assegurar a permeabilidade das vias aéreas: posicionar a gestante em decúbito lateral esquerdo e elevado , simultaneamente a outros procedimentos.\n\n' +
    'Aspirar as vias aéreas, lateralizar o rosto durante a convulsão para evitar broncoaspiração e, se necessário, utilizar a cânula de Guedel.\n\n' +
    'Realizar a prevenção de traumas, sem contenção ativa da paciente.'
  ]

  const titles = [
    'A (Vias Aéreas e Ajuda)'
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
