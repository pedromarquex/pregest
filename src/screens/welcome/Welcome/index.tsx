import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../../../components/Button'

import LogoPregest from '../../../assets/img/logo-pregest.jpg'

interface Props {
  onPress: () => void
}

export function Welcome ({ onPress }: Props): JSX.Element {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Image
        source={LogoPregest}
        style={styles.logo}
      />
      <Button
        text="Iniciar"
        onPress={onPress}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E3EA',
    justifyContent: 'center',
    paddingHorizontal: 60
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 50
  }
})
