import dayjs from 'dayjs'
import React from 'react'
import { type TextInput as RNTextInput } from 'react-native'
import { Masks, useMaskedInputProps } from 'react-native-mask-input'

import { TextInput, type TextInputProps } from '.'

interface DateInputProps extends TextInputProps {
  open: boolean
  setOpen: (open: boolean) => void
}

function DateInput ({
  value,
  onChangeText,
  open,
  setOpen,
  ...rest
}: DateInputProps): JSX.Element {
  const { onChangeText: onChangeMaskedText, value: maskedValue } =
            useMaskedInputProps({
              value,
              onChangeText,
              mask: Masks.DATE_DDMMYYYY
            })

  const dateRef = React.useRef<RNTextInput>(null)

  const date = new Date(maskedValue.split('/').reverse().join('-'))

  function addDate (pickedDate: Date): void {
    const formattedDate = dayjs(pickedDate).format('DD/MM/YYYY')
    if (onChangeText != null) {
      onChangeText(formattedDate)
    }
    setOpen(false)
  }

  return (
          <TextInput
              value={maskedValue}
              keyboardType="numeric"
              onChangeText={onChangeMaskedText}
              {...rest}
          />
  )
}

export { DateInput }
