import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../components/Background'
import { BodyContainer } from '../../../components/BodyContainer'
import { BodyText } from '../../../components/BodyText'
import { Title } from '../../../components/Title'

export function Developers (): JSX.Element {
  const contentText = [
    'Graduada em Enfermagem pela Universidade Federal do Piauí, Especialização em Formação Pedagógica- PROFAE, Saúde Pública, Estatística, Mestrado em Educação na Universidade Federal do Piaui e Doutorado em Saúde Coletiva UECE. Tem experiência na área de Saúde Pública, atuando principalmente nos seguintes temas: hipertensão arterial sistêmica, adesão terapêutica e construção e validação de tecnologias em saúde. Professora Titular do Magistério Federal lotada no Colégio Técnico de Teresina (CTT) da Universidade Federal do Piauí (UFPI); Subcoordenadora do Programa de Pós-Graduação em Saúde e Comunidade (PPGSC) e docente do Programa de Pós-Graduação Saúde da Mulher (PPGSM) da UFPI.',
    'Graduada em Enfermagem pelo Centro de Ensino Unificado de Teresina (CEUT), Especialização em  em Saúde da Mulher, Cuidados Paliativos e Enfermagem em Oncologia pela Faveni, Mestranda em Saúde da Mulher, pela Universidade Federal do Piauí- UFPI. Tem experiência em Saúde da mulher, Clínica médica e Oncologia'
  ]

  const infoText = 'UNIVERSIDADE FEDERAL DO PIAUÍ - UFPI\n' +
  'PRÓ-REITORIA DE ENSINO DE PÓS-GRADUAÇÃO\n' +
  'CENTRO DE CIÊNCIAS DA SAÚDE\n' +
  'PROGRAMA DE MESTRADO PROFISSIONAL EM SAÚDE DA MULHER'

  const titles = [
    'Dra. Malvina Thais Pacheco Rodrigues',
    'M.a Letícia Lacerda Marques'
  ]

  return (
    <Background style={styles.container}>
      <BodyContainer>
        {contentText.map((text, index) => (
          <View key={index}>
            <Title text={titles[index]} />
            <BodyText text={text} withDivider />
          </View>
        ))}
        <BodyText text={infoText} />
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
