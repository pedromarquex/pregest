import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput as PaperInput } from 'react-native-paper'
import { colors } from '../../@theme/colors'
import { fonts } from '../../@theme/fonts'

interface Props extends React.ComponentProps<typeof PaperInput> {}

export function TextInput ({ style, ...props }: Props): JSX.Element {
  return <PaperInput
      {...props}
      mode='outlined'
      theme={{
        colors: {
          background: props.disabled === true
            ? colors.gray4
            : '#fff'
        },
        fonts: {
          regular: {
            fontFamily: fonts.regular
          }
        }
      }}
      outlineColor={colors.inputPlaceholder}
      activeOutlineColor={colors.mainPurple}
      autoCorrect={false}
      style={[styles.input, style]}
      placeholderTextColor={colors.inputPlaceholder}
      textColor={colors.blackBlue}
    />
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    marginBottom: 16,
    borderRadius: 10
  }
})
