import React from 'react';
import { NativeTabs } from 'expo-router/build/native-tabs';
import { Label, Icon as SFIcon } from 'expo-router';

export default function TabLayout() {
  return (
    <NativeTabs blurEffect="dark">
      <NativeTabs.Trigger name="index">
        <SFIcon sf="house" />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search" role="search">
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="watch-list">
        <SFIcon sf="clock" />
        <Label>WatchList</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="network-log">
        <SFIcon sf="bookmark" />
        <Label>Bookmark</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
