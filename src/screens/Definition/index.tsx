import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../components/Background'
import { BodyContainer } from '../../components/BodyContainer'
import { BodyText } from '../../components/BodyText'

function Definition (): JSX.Element {
  const contentText = [
    'A Pré-eclâmpsia é definida como uma doença multifatorial e multissistêmica, caracterizada pela presença da hipertensão arterial e proteinúria após a 20º semana de gestação. Além disso, é possível apresentar essa síndrome hipertensiva quando ocorre disfunção de órgãos-alvo, mesmo na ausência de proteinúria.'
  ]

  return (
    <Background style={styles.container}>
      <BodyContainer>
        {contentText.map((text, index) => (
          <BodyText key={index} text={text} />
        ))}
      </BodyContainer>
    </Background>
  )
}

export { Definition }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
