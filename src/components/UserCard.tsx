import { Image, Text, View } from 'react-native'
import { Button } from './Button'
import { UsersDto } from '../dtos/UsersDto'

type UserCardProps = {
  data: UsersDto
  onEdit: () => void
}

export function UserCard({ data, onEdit }: UserCardProps) {
  return (
    <View className="flex-row justify-between border-black rounded-xl border-2 p-3 bg-white">
      <Image className="w-24 h-24 rounded-full" source={{ uri: data.avatar }} />
      <View className="justify-between items-end">
        <Text className="font-bold text-blue-600 text-lg">{data.name}</Text>
        <Button text="Edit" onPress={onEdit} />
      </View>
    </View>
  )
}
