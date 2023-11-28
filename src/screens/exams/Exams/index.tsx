import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../../components/Background'
import { MenuButton } from '../../../components/MenuButton'

export function Exams (): JSX.Element {
  const navigation = useNavigation()

  return (
    <Background style={styles.container} contentContainerStyle={styles.contentContainer}>
      <MenuButton
        title="Exames Laboratoriais"
        icon="microscope"
        onPress={() => { navigation.navigate('Laboratory') }}
      />
      <MenuButton
        title="Exames de Imagem"
        icon="microscope"
        onPress={() => { navigation.navigate('Images') }}
      />
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    paddingTop: 20
  }
})
