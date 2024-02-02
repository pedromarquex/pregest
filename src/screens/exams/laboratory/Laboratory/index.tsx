import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../../../components/Background'
import { MenuButton } from '../../../../components/MenuButton'

export function Laboratory (): JSX.Element {
  const navigation = useNavigation()

  const menuItems = [
    {
      title: 'Hemograma',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('Hemogram') }
    },
    {
      title: 'Creatinina',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('Creatinine') }
    },
    {
      title: 'Desidrogenase Lática (DHL)',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('Desidrogenase') }
    },
    {
      title: 'Bilirrubinas totais e frações',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('Bilirubin') }
    },
    {
      title: 'Ureia',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('Urea') }
    },
    {
      title: 'Transaminase glutâmico-oxalacética (TGO/AST)',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('TransaminaseGlutamicoOxalacetica') }
    },
    {
      title: 'Transaminase Pirúvica (TGP/ALT)​',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('TransaminasePiruvica') }
    },
    {
      title: 'Proteinúria',
      icon: 'microscope' as 'microscope',
      onPress: () => { navigation.navigate('Proteinury') }
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
