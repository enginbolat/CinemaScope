import { Platform } from 'react-native'

const useNativeSearchBar = () => {
  const parsedPlatformVersion = parseInt(String(Platform.Version), 10)
  const isNativeSearchBar = Platform.OS === 'ios' && parsedPlatformVersion >= 26
  return { parsedPlatformVersion, isNativeSearchBar }
}

export default useNativeSearchBar
