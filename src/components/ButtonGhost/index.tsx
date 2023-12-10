import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../@theme/colors'
import { fonts } from '../../@theme/fonts'
import { Button, type ButtonProps } from '../Button'

interface ButtonGhostProps extends ButtonProps {}

export function ButtonGhost ({
  text,
  style,
  textStyle,
  ...props
}: ButtonGhostProps): JSX.Element {
  return (
    <Button
      text={text}
      style={{
        ...styles.container,
        ...style
      }}
      textStyle={{
        ...styles.text,
        ...textStyle
      }}
    {...props}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    justifyContent: 'center'
  },
  text: {
    color: colors.mainPurple,
    textAlign: 'left',
    fontFamily: fonts.medium
  }
})
