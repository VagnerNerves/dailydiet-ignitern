import AsyncStorage from '@react-native-async-storage/async-storage'

import { format } from 'date-fns'

import { MealStorageDTO } from '@storage/meal/mealStorageDTO'

import { mealsGetAll } from '@storage/meal/mealsGetAll'
import { ListMealStorageDTO } from './listmealStorageDTO'
import { LISTMEAL_COLLECTION } from '@storage/storageConfig'

export async function listmealCreate() {
  try {
    let dataMeals: MealStorageDTO[] = await mealsGetAll()

    //Order by Date
    dataMeals.sort((a, b) => {
      const dateA = new Date(a.date)
      const hourA = new Date(a.hour)
      const dateandhourA = new Date(
        dateA.getFullYear(),
        dateA.getMonth(),
        dateA.getDate(),
        hourA.getHours(),
        hourA.getMinutes(),
        hourA.getSeconds()
      )

      const dateB = new Date(b.date)
      const hourB = new Date(b.hour)
      const dateandhourB = new Date(
        dateB.getFullYear(),
        dateB.getMonth(),
        dateB.getDate(),
        hourB.getHours(),
        hourB.getMinutes(),
        hourB.getSeconds()
      )

      if (dateandhourA > dateandhourB) {
        return -1
      }

      if (dateandhourA < dateandhourB) {
        return 1
      }

      return 0
    })

    //Create List Meal
    const dataListMeal = dataMeals.reduce(
      (accumulator: ListMealStorageDTO[], currentValue) => {
        const date = new Date(currentValue.date)
        const dataFormated = format(date, "dd'.'MM'.'yy")

        const indice = accumulator.findIndex(
          item => item.title === dataFormated
        )

        if (indice >= 0) {
          accumulator[indice].data = [
            ...accumulator[indice].data,
            { ...currentValue }
          ]
        } else {
          accumulator.push({
            title: dataFormated,
            data: [{ ...currentValue }]
          })
        }

        return accumulator
      },
      []
    )

    await AsyncStorage.setItem(
      LISTMEAL_COLLECTION,
      JSON.stringify(dataListMeal)
    )
  } catch (error) {
    throw error
  }
}
