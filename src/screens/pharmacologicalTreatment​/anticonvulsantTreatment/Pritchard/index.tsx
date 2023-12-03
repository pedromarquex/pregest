import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Pritchard (): JSX.Element {
  const contentText = [
    'Intravenoso e Intramuscular.',
    '4g por via intravenosa (bolus), administrados lentamentea + 10g intramuscular (5g em cada nádega).',
    '5g por via intramuscular profunda a cada 4 horas.',
    'Utilizar 10 mL da ampola de MgSO4 50%. Outras apresentações não devem ser utilizadas para esse esquema devido ao volume excessivo delas.',
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
        <Title text="Pritchard" />
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
