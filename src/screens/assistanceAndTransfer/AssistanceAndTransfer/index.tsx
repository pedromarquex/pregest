import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../components/Background'
import { BodyContainer } from '../../../components/BodyContainer'
import { BodyText } from '../../../components/BodyText'
import { MenuButton } from '../../../components/MenuButton'
import { Title } from '../../../components/Title'
import { ReferenceText } from '../../../components/ReferenceText'

export function AssistanceAndTransfer (): JSX.Element {
  const navigation = useNavigation()

  const contentText = [
    'Precisa ser feita por uma equipe multiprofissional e os cuidados instituídos para a paciente devem respeitar um atendimento sequencial: A, B, C, D, E, F, G.'
  ]

  const titles = [
    'Importante!'
  ]

  const reference = '(FEBRAGO, 2018).'

  return (
    <Background style={styles.container}
      contentContainerStyle={{
        paddingTop: 20
      }}
    >
      <MenuButton
        title="Recomendações para assistência da paciente"
        icon="microscope"
        onPress={() => { navigation.navigate('RecommendationsForAssistance') }}
      />
      <MenuButton
        title="Recomendações para transferência da paciente"
        icon="microscope"
        onPress={() => 1}
      />
      <BodyContainer>
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
