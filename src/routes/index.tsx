import React from 'react'
import { Welcome } from '../screens/welcome/Welcome'
import { Tabs } from './tabs.routes'

export function Routes (): JSX.Element {
  const [initialized, setInitialized] = React.useState(false)

  if (!initialized) {
    return (
      <Welcome onPress={() => { setInitialized(true) }} />
    )
  }

  return (
    <Tabs />
  )
}
