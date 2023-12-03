import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts
} from '@expo-google-fonts/montserrat'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { PaperProvider, Portal } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Tabs } from './src/routes/tabs.routes'

export default function App (): JSX.Element {
  const [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_500Medium
  })

  if (!fontsLoaded || (fontError != null)) {
    return <></>
  }

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Portal.Host>
            <NavigationContainer>
              <StatusBar style="dark" />
              <Tabs />
            </NavigationContainer>
          </Portal.Host>
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  )
}
