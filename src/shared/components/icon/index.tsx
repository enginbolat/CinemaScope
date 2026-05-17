import type { FC } from 'react'

import Icons from '@shared/assets/icons'

import type { IIconProps } from './types'

const Icon: FC<IIconProps> = ({ name, size, height, width, color, color2 }) => {
  const SelectedIcon = Icons[name]
  return <SelectedIcon size={size} height={height} width={width} color={color} color2={color2} />
}

export default Icon
