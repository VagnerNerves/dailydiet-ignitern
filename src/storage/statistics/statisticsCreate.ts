import AsyncStorage from '@react-native-async-storage/async-storage'

import { STATISTICS_COLLECTION } from '@storage/storageConfig'

import { MealStorageDTO } from '@storage/meal/mealStorageDTO'
import { mealsGetAll } from '@storage/meal/mealsGetAll'

import { StatisticsStorageDTO } from './statisticsStorageDTO'

export async function statisticsCreate() {
  try {
    const meals: MealStorageDTO[] = await mealsGetAll()

    let percentageDiet = 0
    let sequenceInicial = 0
    let bestDietSequence = 0
    let totalMeal = 0
    let totalMealIsOnDiet = 0
    let totalMealIsNotOnDiet = 0
    let dietIsOk = false

    meals.map(meal => {
      /* Total Meals */
      totalMeal++

      /* Meal is on Diet or it not on Diet */
      meal.isOnDiet === true ? totalMealIsOnDiet++ : totalMealIsNotOnDiet++

      /* Best Diet Sequence */
      if (meal.isOnDiet === true) {
        sequenceInicial++

        if (sequenceInicial > bestDietSequence) {
          bestDietSequence = sequenceInicial
        }
      } else {
        sequenceInicial = 0
      }
    })

    /* Percentage Diet */
    percentageDiet = (totalMealIsOnDiet / totalMeal) * 100

    /* Minimum ok is 75% */
    dietIsOk = percentageDiet >= 75

    const statisticsData: StatisticsStorageDTO = {
      percentageDiet,
      bestDietSequence,
      totalMeal,
      totalMealIsOnDiet,
      totalMealIsNotOnDiet,
      dietIsOk
    }

    console.log(statisticsData)

    await AsyncStorage.setItem(
      STATISTICS_COLLECTION,
      JSON.stringify(statisticsData)
    )
  } catch (error) {
    throw error
  }
}
