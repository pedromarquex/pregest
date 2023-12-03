import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../../components/Background'
import { MenuButton } from '../../../components/MenuButton'

export function NonPharmacologicalTreatment (): JSX.Element {
  const navigation = useNavigation()

  return (
    <Background style={styles.container} contentContainerStyle={styles.contentContainer}>
      <MenuButton
        title="Dieta"
        icon="pill"
        onPress={() => { navigation.navigate('Diet') }}
      />
      <MenuButton
        title="Repouso"
        icon="pill"
        onPress={() => { navigation.navigate('Rest') }}
      />
      <MenuButton
        title="Acompanhamento laboratorial"
        icon="pill"
        onPress={() => { navigation.navigate('LaboratoryMonitoring') }}
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
