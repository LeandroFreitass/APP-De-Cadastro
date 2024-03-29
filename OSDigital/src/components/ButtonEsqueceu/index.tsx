import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { ButtonTouch, TextBt, TextBt_PRIMARY } from './styles'

type Props = TouchableOpacityProps & {
  title: string
}

export default function ButtonIcon({ title, ...rest }: Props) {
  return (
    <ButtonTouch {...rest}>
      <TextBt>{title}</TextBt>
    </ButtonTouch>
  )
}
