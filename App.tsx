import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useCallback } from 'react'

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

import * as SplashScreen from 'expo-splash-screen'
import { Routes } from './src/routes'

void SplashScreen.preventAutoHideAsync()

export default function App (): JSX.Element {
  const [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_500Medium
  })

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      void SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded || (fontError != null)) {
    return <></>
  }

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <GestureHandlerRootView
          style={{ flex: 1 }}
          onLayout={onLayoutRootView}
        >
          <Portal.Host>
            <NavigationContainer>
              <StatusBar style="dark" />
              <Routes />
            </NavigationContainer>
          </Portal.Host>
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  )
}
