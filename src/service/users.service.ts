import { api } from './api'

export class UserService {
  async getUsers() {
    const { data } = await api.get('/users')
    return data
  }

  async updateUser(id: string, payload: any) {
    const { data } = await api.put(`/users/${id}`, payload)
    return data
  }
}
