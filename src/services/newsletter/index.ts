import { api } from '@/pages/newsletter'

export const getSubcription = async () => {
  return await api.get(
    `/presuscription/5sF4Xq8pZ6LdQ9A3bV1lT0mH7nY2jJ5uK8PdO4fE7N6wX0rC3hZ9oG2vB1kY7tR5sD8eM1iN9l`
  )
}
