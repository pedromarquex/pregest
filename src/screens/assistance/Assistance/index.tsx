import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Background } from '../../../components/Background'
import { MenuButton } from '../../../components/MenuButton'
import { type AssistanceStackScreenProps } from '../../../routes/assistance/assistanceStack.types'

export function Assistance ({ navigation }: AssistanceStackScreenProps<'Assistance'>): JSX.Element {
  const insets = useSafeAreaInsets()

  const paddingTop = Platform.OS === 'android' ? 40 + insets.top : 40

  const menuItems = [
    {
      title: 'Paciente sem diagnóstico de Pré-eclampsia',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('BasicInfo') }
    },
    {
      title: 'Paciente com diagnóstico de Pré-eclampsia​',
      icon: 'pill' as 'pill',
      onPress: () => 1
    }
  ]

  return (
    <Background style={styles.container} contentContainerStyle={{ paddingTop }}>
      {menuItems.map((item, index) => (
        <MenuButton
          key={index}
          title={item.title}
          icon={item.icon}
          onPress={item.onPress}
        />
      ))}
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
