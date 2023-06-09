import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'

import { mealsGetAll } from './mealsGetAll'
import { MealStorageDTO } from './mealStorageDTO'

import { statisticsCreate } from '@storage/statistics/statisticsCreate'

export async function mealCreate(meal: MealStorageDTO) {
  try {
    const storageMeals = await mealsGetAll()

    const mealAlreadyExist = storageMeals.filter(
      mealStorage => mealStorage.id === meal.id
    )

    if (mealAlreadyExist.length > 0) {
      throw 'Essa refeição já está cadastrada no sistema.'
    }

    const storage = JSON.stringify([...storageMeals, meal])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
    await statisticsCreate()
  } catch (error) {
    throw error
  }
}
