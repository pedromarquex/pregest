import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Creatinine (): JSX.Element {
  const contentText = [
    'Níveis anormais ou em elevação da creatinina, especialmente com oligúria, sugerem pré-eclâmpsia grave.',
    '0,60-1,2mg/dL',
    'Interromper gestação se creatinina > 1,2mg/dl sem doença renal prévia ou o se houver insuficiência renal evidenciada principalmente por elevação progressiva dos níveis de ureia e creatinina, oligúria e anasarca;\nSolicitar pelo menos uma vez por semana, a cada consulta, ou a cada 72h para pré-eclâmpsia com sinais de gravidade.'
  ]

  const titles = [
    'Justificativa:',
    'Valores de Referência:',
    'Recomendações:'
  ]

  const reference = '(BRASIL, 2022; PERAÇOLI, 2020;FEBRASGO, 2019).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Creatinina" />
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
