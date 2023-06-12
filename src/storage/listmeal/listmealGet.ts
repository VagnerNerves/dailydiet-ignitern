import AsyncStorage from '@react-native-async-storage/async-storage'

import { LISTMEAL_COLLECTION } from '@storage/storageConfig'
import { ListMealStorageDTO } from './listmealStorageDTO'

export async function listmealGet() {
  try {
    const storage = await AsyncStorage.getItem(LISTMEAL_COLLECTION)

    const listmeal: ListMealStorageDTO[] = storage ? JSON.parse(storage) : []

    return listmeal
  } catch (error) {
    throw error
  }
}
