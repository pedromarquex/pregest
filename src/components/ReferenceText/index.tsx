import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '../../@theme/colors'
import { fonts } from '../../@theme/fonts'

interface Props {
  text: string
}

export function ReferenceText ({ text }: Props): JSX.Element {
  return (
    <>
      <Text style={styles.bodyText}>{text}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: fonts.regular,
    color: colors.blackBlue2,
    fontSize: 11,
    lineHeight: 14,
    marginBottom: 16,
    textAlign: 'right'
  }
})
