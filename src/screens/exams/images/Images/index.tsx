import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../../../components/Background'
import { MenuButton } from '../../../../components/MenuButton'

export function Images (): JSX.Element {
  const navigation = useNavigation()

  const menuItems = [
    {
      title: 'Ultrassonografia gestacional​',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('Ultrasson') }
    },
    {
      title: 'Dopplervelocimetria​',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('Dopplervelocimetry') }
    },
    {
      title: 'Perfil biofísico fetal​',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('BioProfile') }
    },
    {
      title: 'Cardiotocografia​',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('Cardiotocography') }
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
