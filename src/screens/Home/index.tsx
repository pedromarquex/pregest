import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Background } from '../../components/Background'
import { MenuButton } from '../../components/MenuButton'

function Home (): JSX.Element {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()
  const paddingTop = Platform.OS === 'android' ? 40 + insets.top : 40

  const menuItems = [
    {
      title: 'Conceito e diagnóstico',
      icon: 'pill' as 'pill',
      onPress: () => {
        navigation.navigate('Definition')
      }
    },
    {
      title: 'Classificação da Pressão Arterial',
      icon: 'pill' as 'pill',
      onPress: () => {
        navigation.navigate('Classification')
      }
    },
    {
      title: 'Exames',
      icon: 'pill' as 'pill',
      onPress: () => {
        navigation.navigate('Exams')
      }
    },
    {
      title: 'Tratamento Farmacológico​',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('PharmacologicalTreatment') }
    },
    {
      title: 'Tratamento não Farmacológico​',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('NonPharmacologicalTreatment') }
    },
    {
      title:
        'Assistência e Transferência para Unidade de Referência Hospitalar',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('AssistanceAndTransfer') }
    },
    {
      title: 'Referências',
      icon: 'pill' as 'pill',
      onPress: () => 1
    }
  ]

  return (
    <Background
      contentContainerStyle={{
        paddingTop
      }}
    >
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

export { Home }
