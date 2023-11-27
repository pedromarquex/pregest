import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../../../../components/Background'
import { MenuButton } from '../../../../../components/MenuButton'

export function TreponemalTests (): JSX.Element {
  const navigation = useNavigation()

  return (
    <Background style={styles.container}>
      <MenuButton
        title="Testes rápidos"
        icon="microscope"
        onPress={() => { navigation.navigate('QuickTests') }}
      />
      <MenuButton
        title="Testes de hemaglutinação"
        icon="microscope"
        onPress={() => 1}
      />
      <MenuButton
        title="Teste de imunofluorescência indireta"
        icon="microscope"
        onPress={() => 1}
      />
      <MenuButton
        title="Ensaios imunoenzimáticos "
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
