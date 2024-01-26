import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

export function Proteinury (): JSX.Element {
  const contentText = [
    'Exame utilizado como critério para diagnostico da pré-eclâmpsia.',
    '< 300mg em urina de 24 horas;\nrelação proteína/creatinina < 0,3 mg/dL;\n< 1g em fita reagente em amostra de urina isolada.',
    'Entre os critérios utilizados para a identificação de proteinúria significativa, o método de relação proteína/creatinina urinárias (ambas em mg/dL) é o mais fidedigno, de fácil execução e de menor custo;\nA repetição da proteinúria não se faz necessária'
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
        <Title text="Proteinúria" />
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
