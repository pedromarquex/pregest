import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../../../components/Background'
import { MenuButton } from '../../../../components/MenuButton'

export function AntihypertensiveTreatment (): JSX.Element {
  const navigation = useNavigation()

  const menuItems = [
    {
      title: 'Metildopa​',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('Methyldopa') }
    },
    {
      title: 'Clonidina​',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('Clonidine') }
    },
    {
      title: 'Nifedipino Retard​',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('NifedipineRetard') }
    },
    {
      title: 'Anlodipino​',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('Amlodipine') }
    },
    {
      title: 'Hidralazina',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('Hydralazine') }
    },
    {
      title: 'Metoprolol',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('Metoprolol') }
    },
    {
      title: 'Carvedilol',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('Carvedilol') }
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
