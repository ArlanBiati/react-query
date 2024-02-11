import { clsx } from 'clsx'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  text: string
  close?: boolean
}

export function Button({ text, close, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      className={clsx(
        'bg-blue-600 px-5 py-2 rounded-md',
        close && 'bg-gray-400 px-5 py-2 rounded-md'
      )}
      activeOpacity={0.7}
    >
      <Text className="font-bold text-white text-sm">{text}</Text>
    </TouchableOpacity>
  )
}
