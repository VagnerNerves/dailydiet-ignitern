import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'

import { mealsGetAll } from './mealsGetAll'
import { statisticsCreate } from '@storage/statistics/statisticsCreate'
import { listmealCreate } from '@storage/listmeal/listmealCreate'

export async function mealRemove(id: string) {
  try {
    const storage = await mealsGetAll()

    const filtered = storage.filter(meal => meal.id !== id)
    const meals = JSON.stringify(filtered)

    await AsyncStorage.setItem(MEAL_COLLECTION, meals)
    await statisticsCreate()
    await listmealCreate()
  } catch (error) {
    throw error
  }
}
