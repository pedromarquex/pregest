import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../../../components/Background'
import { Title } from '../../../../components/Title'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'

export function DamageDisabilities (): JSX.Element {
  const contentText = [
    'Iniciar o sulfato de magnésio: fazer dose de ataque letamente em até até 20 minutos.',
    'O esquema adotado pode variar de acordo com o protocolo de cada instituição.'
  ]

  const titles = [
    'D (Danos - Disabilities)',
    'Atenção!'
  ]

  const reference = '(FEBRASGO, 2018).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
      <Title text={titles[0]} />
        <BodyText text={contentText[0]} withDivider />
        <Title text={titles[1]} style={{ textAlign: 'center' }} />
        <BodyText text={contentText[1]} withDivider />
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
