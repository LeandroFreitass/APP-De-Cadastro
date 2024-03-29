import React from 'react'
import { View, Text, Image } from 'react-native'

import { theme } from '../../styles/theme'
import { styles } from './styles'

type Props = {
  urlImage: string
}

export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors
  return (
    <View style={styles.container} colors={[secondary50, secondary70]}>
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </View>
  )
}
