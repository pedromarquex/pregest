import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../../../components/Background'
import { MenuButton } from '../../../../components/MenuButton'

export function RecommendationsForAssistancees (): JSX.Element {
  const navigation = useNavigation()

  const menuItems = [
    {
      title: 'A (Vias Aéreas e Ajuda)',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('AirwayAndHelp') }
    },
    {
      title: 'B (Ventilação - Breathing)',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('BreathingVentilation') }
    },
    {
      title: 'C (Circulação)',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('Circulation') }
    },
    {
      title: 'D (Danos - Disabilities)',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('DamageDisabilities') }
    },
    {
      title: 'E (Exames)',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('ExamsE') }
    },
    {
      title: 'F (Feto)',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('Fetus') }
    }, {
      title: 'G (Interromper gestação)',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('TerminatePregnancy') }
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
