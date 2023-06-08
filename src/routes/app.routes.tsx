import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { NewMeal } from '@screens/NewMeal'
import { NewMealFeedback } from '@screens/NewMealFeedback'
import { Statistics } from '@screens/Statistics'
import { ViewMeal } from '@screens/ViewMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newmeal" component={NewMeal} />
      <Screen name="newmealfeedback" component={NewMealFeedback} />
      <Screen name="viewmeal" component={ViewMeal} />
    </Navigator>
  )
}
