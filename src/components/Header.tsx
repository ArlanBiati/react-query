import { Text, View } from 'react-native'

type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <View className="justify-center items-center">
      <Text className="font-bold text-2xl text-white">{title}</Text>
    </View>
  )
}
