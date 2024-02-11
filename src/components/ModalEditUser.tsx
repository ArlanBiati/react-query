import { useEffect, useState } from 'react'
import {
  View,
  Modal as ModalRn,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { UserService } from '../service/users.service'

import { UsersDto } from '../dtos/UsersDto'

import { Button } from './Button'

type ModalProps = {
  user: UsersDto | null
  visible: boolean
  handleClose: () => void
}

export function ModalEditUser({ user, visible, handleClose }: ModalProps) {
  const userService = new UserService()
  const { mutate } = useMutation({
    mutationFn: () => {
      if (!user) return
      userService.updateUser(user.id, { name: value })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('user-list')
      handleClose()
    },
  })
  const queryClient = useQueryClient()

  const [value, setValue] = useState('')

  useEffect(() => {
    if (!user) return
    setValue(user.name)
  }, [user])

  // async function handleChangeUserName() {
  //   try {
  //     if (!user) return
  //     await userService.updateUser(user.id, { name: value })
  //     handleClose()
  //   } catch (error: any) {
  //     console.log(error.response.data)
  //   }
  // }

  return (
    <ModalRn
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <View className="flex-1 justify-center items-center bg-[#000a]">
        <View className="bg-white rounded-md p-5 w-96">
          <View className="flex-row justify-between items-center mb-5">
            <Text className="font-bold text-xl ">Update User</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={handleClose}>
              <Feather name="x" size={20} />
            </TouchableOpacity>
          </View>

          <View className="h-0.5 w[100%] bg-gray-100" />

          <View className="mt-5">
            <Text>Name</Text>
            <TextInput
              value={value}
              onChangeText={setValue}
              placeholder="Edit name"
              className="border mt-2 p-2"
            />
          </View>

          <View className="flex-row justify-end gap-2 mt-5">
            <Button text="Close" close onPress={handleClose} />
            <Button text="Save" onPress={() => mutate()} />
          </View>
        </View>
      </View>
    </ModalRn>
  )
}
