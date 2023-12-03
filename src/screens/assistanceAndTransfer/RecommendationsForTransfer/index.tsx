import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../components/Background'
import { BodyContainer } from '../../../components/BodyContainer'
import { Title } from '../../../components/Title'
import { BodyText } from '../../../components/BodyText'
import { ReferenceText } from '../../../components/ReferenceText'

export function RecommendationsForTransfer (): JSX.Element {
  const contentText = [
    'A transferência deverá ser realizada após estabilização da paciente;',
    'Entrar em contato com a unidade de maior complexidade ou para a UTI e informar de forma adequada, detalhando quadro da paciente, solicitar vaga e aguardar aceitação;',
    'Veículo adequado para o transporte;',
    'Verificar funcionamento e perfusão do cesso venoso;',
    'Manter e controlar hidratação;',
    'Instalar  tratamento anticonvulsivo de acordo com a distância e disponibilidade de infraestrutura para transferência:\n\n' +
    'Se grandes distâncias e sem condições de uso de bombas de infusão: Fazer dose de ataque do sulfato de magnésio pelo Esquema de Pritchard IV + IM, para reduzir risco de infusão intempestiva durante o transporte;',
    'Anti-hipertensivos de emergência preparados;',
    'Acompanhamento por médico;',
    'Conferir material para intubação, ventilação e reanimação.'
  ]

  const reference = '(FEBRASGO, 2018).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
      <Title text='Recomendações para transferência da paciente' />
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
