import React from 'react'
import { StyleSheet, Text, View, type TextStyle } from 'react-native'
import { colors } from '../../@theme/colors'
import { fonts } from '../../@theme/fonts'

interface Props {
  children: React.ReactNode
  withDivider?: boolean
  style?: TextStyle
}

export function BodyTextWithChild ({ children, withDivider, style }: Props): JSX.Element {
  return (
    <>
      <Text style={[styles.bodyText, style]}>{children}</Text>
      {(withDivider ?? false) && <View style={styles.divider} />}
    </>
  )
}

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: fonts.regular,
    color: colors.blackBlue2,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.background,
    marginBottom: 16
  }
})
