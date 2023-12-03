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
    '1g por via intravenosa por hora em bomba de infusão contínua (BIC).',
    'Diluir 10 de MgSO4 50% (1 ampola) em 490 mL de soro ­ fisiológico a 0,9%. A concentração­ nal terá 1g/100 mL. Infundir a solução por via intravenosa na velocidade de 100 mL/hora.',
    '- Pressão arterial sistólica ≥ 160 mmHg e/ou PA diastólica ≥ 110 mmHg, mesmo na ausência de sintomas, indica a profilaxia de convulsão;\n\n' +
    '- Em pacientes com insuficiência renal (creatinina ≥ 1,2 mg/dL), a dose de manutenção deve ser a metade da dose recomendada. Deve-se interromper a infusão do sulfato de magnésio apenas se a diurese for inferior a 25 mL;\n\n' +
    '- Para manter a dose endovenosa ou aplicar nova dose intramuscular recomenda-se a monitorização dos seguintes parâmetros: reflexo patelar presente, frequência respiratória ≥ 16 irpm e diurese ≥ 25 mL/h;\n\n' +
    '- O gluconato de cálcio (1g por via endovenosa – 10 mL a 10% – administrado lentamente) deve ser utilizado nos casos de sinais de intoxicação.'
  ]

  const titles = [
    'Via de Administração:',
    'Dose de Ataque:',
    'Dose de Manutenção:',
    'Preparação:',
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
