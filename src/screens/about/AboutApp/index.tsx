import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../components/Background'
import { BodyContainer } from '../../../components/BodyContainer'
import { BodyText } from '../../../components/BodyText'
import { Title } from '../../../components/Title'

export function AboutApp (): JSX.Element {
  const contentText =
    'Este aplicativo foi desenvolvido com base em estudos realizados por estas pesquisadoras e tem como finalidade   oferecer subsídios para assistência a gestante com pré-eclâmpsia aos profissionais médicos e enfermeiros.\n' +
    'Acreditamos que este aplicativo servirá como uma estratégia de saúde com impacto significativo na tomada de decisão clínica individualizada e em tempo oportuno, favorecendo a otimização da prática clínica a fim de evitar desfechos que acarretem riscos à saúde materno-fetal.\n' +
    'Esperamos contribuir ainda mais para o seu conhecimento com essas informações.'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <View>
          <BodyText text={contentText} withDivider />
        </View>
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
