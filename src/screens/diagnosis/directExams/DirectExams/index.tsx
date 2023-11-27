import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../../../components/Background'
import { MenuButton } from '../../../../components/MenuButton'

export function DirectExams (): JSX.Element {
  const navigation = useNavigation()

  return (
    <Background style={styles.container}>
      <MenuButton
        title="Exames em campo escuro"
        icon="microscope"
        onPress={() => 1}
      />
      <MenuButton
        title="Pesquisa direta com material corado"
        icon="microscope"
        onPress={() => 1}
      />
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
