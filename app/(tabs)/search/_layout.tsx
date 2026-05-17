import { Stack } from 'expo-router'

import { AppColors } from '@shared/constants/app-colors'

export default function SearchLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        title: '',
        contentStyle: { backgroundColor: AppColors.background },
      }}
    />
  )
}
