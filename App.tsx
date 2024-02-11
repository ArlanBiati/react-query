import { StatusBar } from 'expo-status-bar'
import { Users } from './src/screens/Users'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
      <Users />
    </QueryClientProvider>
  )
}
