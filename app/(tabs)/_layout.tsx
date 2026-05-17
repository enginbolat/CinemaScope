import { Label, Icon as SFIcon } from 'expo-router'

import { NativeTabs } from 'expo-router/build/native-tabs'

import { AppColors } from '@shared/constants/app-colors'

export default function TabLayout() {
  return (
    <NativeTabs
      blurEffect="dark"
      labelStyle={{
        selected: { color: AppColors.primary },
      }}
      iconColor={{
        selected: AppColors.primary,
      }}>
      <NativeTabs.Trigger name="index">
        <SFIcon sf="house" />
        <Label>Home</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search" role="search" />

      <NativeTabs.Trigger name="watch-list">
        <SFIcon sf="clock" />
        <Label>WatchList</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="network-log">
        <SFIcon sf="bookmark" />
        <Label>Bookmark</Label>
      </NativeTabs.Trigger>

    </NativeTabs>
  )
}
