import React from 'react'
import { StyleSheet, View } from 'react-native'

interface Props {
  children: React.ReactNode
}

function BodyContainer ({ children }: Props): JSX.Element {
  return <View style={styles.container}>{children}</View>
}

export { BodyContainer }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'column',
    width: '100%',
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 16
  }
})
