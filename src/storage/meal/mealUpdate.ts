import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'

import { MealStorageDTO } from './mealStorageDTO'

import { mealsGetAll } from './mealsGetAll'
import { statisticsCreate } from '@storage/statistics/statisticsCreate'
import { listmealCreate } from '@storage/listmeal/listmealCreate'

export async function mealUpdate(meal: MealStorageDTO) {
  try {
    const storage = await mealsGetAll()

    const meals = storage.map(mealStorage => {
      if (mealStorage.id === meal.id) {
        return meal
      }

      return mealStorage
    })

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals))
    await statisticsCreate()
    await listmealCreate()
  } catch (error) {
    throw error
  }
}
