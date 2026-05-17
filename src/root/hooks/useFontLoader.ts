import { useFonts } from 'expo-font'

import { Geist_600SemiBold } from '@expo-google-fonts/geist'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import {
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from '@expo-google-fonts/plus-jakarta-sans'

const useFontLoader = () => {
  const [fontsLoaded] = useFonts({
    PlusJakartaSans_800ExtraBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Geist_600SemiBold,
  })
  return fontsLoaded
}

export default useFontLoader
