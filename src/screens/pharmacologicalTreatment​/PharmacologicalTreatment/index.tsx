import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../../components/Background'
import { MenuButton } from '../../../components/MenuButton'

export function PharmacologicalTreatment (): JSX.Element {
  const navigation = useNavigation()

  return (
    <Background style={styles.container} contentContainerStyle={styles.contentContainer}>
      <MenuButton
        title="Tratamento anti-hipertensivo"
        icon="pill"
        onPress={() => { navigation.navigate('AntihypertensiveTreatment') }}
      />
      <MenuButton
        title="Tratamento da crise hipertensiva​"
        icon="pill"
        onPress={() => { navigation.navigate('TreatmentOfHypertensiveCrisis') }}
      />
      <MenuButton
        title="Tratamento anticonvulsivo"
        icon="pill"
        onPress={() => { navigation.navigate('AnticonvulsantTreatment') }}
      />
      <MenuButton
        title="Corticoterapia"
        icon="pill"
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
