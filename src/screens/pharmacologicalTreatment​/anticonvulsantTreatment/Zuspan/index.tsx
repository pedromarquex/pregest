import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Zuspan (): JSX.Element {
  const contentText = [
    'Exclusivamente intravenoso.',
    '4g por via intravenosa (bolus), administrados lentamente.',
    'Diluir 8 mL de MgSO4 50% (4g) em 12 mL de soro fisiológico 0,9% ou água destilada, resultando na concentração final de 4g/20 mL. Administrar a solução lentamente, entre 15 a 20 minutos por via intravenosa;' +
    '\n\nOutra alternativa: Diluir 8 mL MgSO4 50% (4g) em 100mL de soro fisiológico 0,9% a 300 mL/h em bomba de infusão contínua, resultando na infusão do volume total em aproximadamente 20 minutos.',
    '1g via intravenosa por hora em bomba de infusão contínua (BIC).',
    'Diluir uma ampola (10mL) de MgSO4 50% em 490 mL de soro fisiológico a 0,9%, obtendo a concentração final de 1g/100 mL. A solução deve ser infundida por via intravenosa na velocidade de 100 mL/h (1g/h); \n\n' +
    'Em caso de pacientes sintomáticas após o início da dose de manutenção, pode-se aumentar a infusão para 2g/hora. Dessa forma, dilui-se 20 mL de MgSO4 50% (2 ampolas) em 480 mL de soro fisiológico a 0,9% com a infusão de 100 mL/h.',
    '- Pressão arterial sistólica ≥ 160 mmHg e/ou PA diastólica ≥ 110 mmHg, mesmo na ausência de sintomas, indica a profilaxia de convulsão;\n\n' +
    '- Em pacientes com insuficiência renal (creatinina ≥ 1,2 mg/dL), a dose de manutenção deve ser a metade da dose recomendada. Deve-se interromper a infusão do sulfato de magnésio apenas se a diurese for inferior a 25 mL;\n\n' +
    '- O gluconato de cálcio (1g por via endovenosa – 10 mL a 10% – administrado lentamente) deve ser utilizado nos casos de sinais de intoxicação.'
  ]

  const titles = [
    'Via de Administração:',
    'Dose de Ataque:',
    'Preparo da dose de ataque:',
    'Dose de Manutenção:',
    'Preparo da dose de manutenção:',
    'Nota:'
  ]

  const reference = '(PERAÇOLI et al., 2019; BRASIL, 2022; COUTINHO, C; COUTINHO, T; COUTINHO, L, 2021).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Zuspan" />
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
