import { useState } from 'react'
import { RefreshControl, SafeAreaView, ScrollView, View } from 'react-native'

import { useQuery } from '@tanstack/react-query'

import { UsersDto } from '../dtos/UsersDto'

import { Header } from '../components/Header'
import { Loading } from '../components/Loading'
import { UserCard } from '../components/UserCard'
import { UserService } from '../service/users.service'
import { ModalEditUser } from '../components/ModalEditUser'

export function Users() {
  const userService = new UserService()
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ['user-list'],
    queryFn: userService.getUsers,
  })

  const [isVisible, setIsVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UsersDto | null>(null)

  // const [isLoading, setIsloading] = useState(false)
  // const [userList, setUserList] = useState<UsersDto[]>([])

  // useEffect(() => {
  //   fetchUsers()
  // }, [])

  // async function fetchUsers() {
  //   setIsloading(true)
  //   try {
  //     const { data } = await api.get('/users')
  //     setUserList(data)
  //   } catch (error: any) {
  //     console.log(error.response.data)
  //   } finally {
  //     setIsloading(false)
  //   }
  // }

  function handleOpenModalEdit() {
    setIsVisible(!isVisible)
  }

  function handleGetUserToEdit(user: UsersDto) {
    setSelectedUser(user)
  }

  return (
    <View className="flex-1 bg-blue-600">
      <SafeAreaView>
        <Header title="User List" />
        <View className="p-8">
          {isLoading ? (
            <Loading />
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ gap: 50, paddingBottom: 100 }}
              refreshControl={
                <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
              }
            >
              {data.map((user: UsersDto) => (
                <UserCard
                  key={user.id}
                  data={user}
                  onEdit={() => {
                    handleOpenModalEdit(), handleGetUserToEdit(user)
                  }}
                />
              ))}
            </ScrollView>
          )}
        </View>
        <ModalEditUser
          visible={isVisible}
          handleClose={handleOpenModalEdit}
          user={selectedUser}
        />
      </SafeAreaView>
    </View>
  )
}
