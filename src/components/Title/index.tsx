import React from 'react'
import { StyleSheet, Text, type TextStyle } from 'react-native'
import { colors } from '../../@theme/colors'
import { fonts } from '../../@theme/fonts'

interface Props {
  text: string
  style?: TextStyle
}

export function Title ({ text, style }: Props): JSX.Element {
  return <Text style={[styles.bodyText, style]}>{text}</Text>
}

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: fonts.semibold,
    color: colors.blackBlue,
    fontSize: 16,
    marginBottom: 16,
    paddingTop: 8
  }
})
