import AsyncStorage from '@react-native-async-storage/async-storage'

import { STATISTICS_COLLECTION } from '@storage/storageConfig'

import { StatisticsStorageDTO } from './statisticsStorageDTO'

export async function statisticsGet() {
  try {
    const storage = await AsyncStorage.getItem(STATISTICS_COLLECTION)

    const statistics: StatisticsStorageDTO = storage ? JSON.parse(storage) : []

    return statistics
  } catch (error) {
    throw error
  }
}
