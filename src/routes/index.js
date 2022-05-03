import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Welcome } from '../pages/Welcome'
import { SignIn } from '../pages/SignIn'

const Stack = createNativeStackNavigator()

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SigIn" component={SignIn} />
    </Stack.Navigator>
  )
}
