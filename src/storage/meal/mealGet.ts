import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'
import { MealStorageDTO } from './mealStorageDTO'

export async function mealGet(id: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : []

    const meal = meals.filter(item => item.id === id)

    return meal[0]
  } catch (error) {
    throw error
  }
}
