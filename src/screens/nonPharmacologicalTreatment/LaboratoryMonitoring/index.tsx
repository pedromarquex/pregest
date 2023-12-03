import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../components/Background'
import { BodyContainer } from '../../../components/BodyContainer'
import { ReferenceText } from '../../../components/ReferenceText'
import { BodyText } from '../../../components/BodyText'
import { Title } from '../../../components/Title'

export function LaboratoryMonitoring (): JSX.Element {
  const contentText = [
    'O acompanhamento com exames laboratoriais visa identificar precocemente o comprometimento de órgãos-alvo e diagnosticar a síndrome HELLP em seu estágio inicial.\n' +
    'Recomenda-se solicitar pelo menos uma vez por semana, porém a frequência de sua realização depende da evolução e da gravidade de cada caso.',
    '- Hemograma (particularmente hematócrito, hemoglobina e contagem de plaquetas).\n' +
    '- Desidrogenase láctica (DHL).\n' +
    '- Bilirrubinas totais.\n' +
    '- Creatinina.\n' +
    '- Transaminase oxalacética (TGO/AST).',
    'A repetição da proteinúria não se faz necessária.\n' +
    'A dosagem de ureia não deve ser efetuada de rotina, exceto quando se suspeita de falência renal e síndrome hemolítico-urêmica.\n' +
    'O nível sérico de ácido úrico, por si, não indica intervenções isoladamente, mas está associado a resultados desfavoráveis.'
  ]

  const titles = [
    'Solicitar exames laboratoriais semanalmente',
    'Exames mínimos a serem solicitados:',
    'Observação:'
  ]

  const reference = '(BRASIL, 2022; FEBRASGO, 2019; PERAÇILI; 2019).'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Acompanhamento laboratorial" />
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
