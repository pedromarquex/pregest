import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../../../components/Background'
import { MenuButton } from '../../../../components/MenuButton'

export function AnticonvulsantTreatment (): JSX.Element {
  const navigation = useNavigation()

  return (
    <Background style={styles.container} contentContainerStyle={styles.contentContainer}>
      <MenuButton
        title="Pritchard"
        icon="pill"
        onPress={() => { navigation.navigate('Pritchard') }}
      />
      <MenuButton
        title="Zuspan​"
        icon="pill"
        onPress={() => { navigation.navigate('Zuspan') }}
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
