import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../../../components/Background'
import { MenuButton } from '../../../../components/MenuButton'

export function TreatmentOfHypertensiveCrisis (): JSX.Element {
  const navigation = useNavigation()

  const menuItems = [
    {
      title: 'Hidralazina ampola',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('HydralazineAmpoule') }
    },
    {
      title: 'Hidralazina IC',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('HydralazineIC') }
    },
    {
      title: 'Nifedipino​',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('Nifedipine') }
    },
    {
      title: 'Nitroprussiato de Sódio',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('SodiumNitroprusside') }
    }
  ]

  return (
    <Background style={styles.container} contentContainerStyle={styles.contentContainer}>
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
