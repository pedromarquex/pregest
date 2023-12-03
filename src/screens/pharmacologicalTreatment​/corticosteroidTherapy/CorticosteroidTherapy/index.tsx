import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../../../components/Background'
import { MenuButton } from '../../../../components/MenuButton'

export function CorticosteroidTherapy (): JSX.Element {
  const navigation = useNavigation()

  return (
    <Background style={styles.container} contentContainerStyle={styles.contentContainer}>
      <MenuButton
        title="Betametasona"
        icon="pill"
        onPress={() => { navigation.navigate('Betamethasone') }}
      />
      <MenuButton
        title="Dexametasona"
        icon="pill"
        onPress={() => { navigation.navigate('Dexamethasone') }}
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
